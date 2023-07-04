// Styles
import { PostsListStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Modules
import PostsFilterModule from "../PostsFilter"
import NewsletterModule from "../Newsletter"
// Cards
import SpotlightCard from "@/components/cards/Spotlight"
import InsightCard from "@/components/cards/Insight"
import ResourceCard from "@/components/cards/Resource"
import JuryCard from "@/components/cards/Jury"
import ProjectCard from "@/components/cards/Project"
// Buttons
import ThirstyButton from "@/components/buttons/Thirsty"

export default function PostsList({ type, posts, categories, awards = [], geographies = [], meta, ...props }) {
  // Datas
  const max = meta && parseInt(meta.sectionSize) || 5
  const maxPostsBeforeNewsletter = meta && parseInt(meta.sectionSize) || 5
  const currentPage = meta && parseInt(meta.page) || 1
  const maxPages = meta && parseInt(meta.totalPages) || 1
  let maxPagesShow = 5
  maxPagesShow = maxPagesShow < maxPages ? maxPagesShow : maxPages
  // Router
  const router = useRouter();
  // References
  const listRef = useRef()
  // States
  const [section, setSection] = useState(1)
  const [infiniteScroll, setInfiniteScroll] = useState(false)
  // Hooks
  // posts = useArray(posts)
  // Effects
  useEffect(() => {
    window.addEventListener('scroll', onScrollWindow)
    return () => {
      window.removeEventListener('scroll', onScrollWindow)
    }
  }, [])
  useEffect(() => {
    if (infiniteScroll) {
      setSection(section + 1)
      setInfiniteScroll(false)
    }
  }, [infiniteScroll])
  
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     window.location.reload();
  //     // // Check if both the query parameters you're interested in have changed
  //     // if (
  //     //   router.asPath !== url && // Ensure the URL has changed
  //     //   (router.query.param1 !== router.query.param2) // Check for the specific query parameter change
  //     // ) {
  //     //   // Reload the page
  //     //   window.location.reload();
  //     // }
  //   };

  //   // Subscribe to route changes
  //   router.events.on('hashChangeStart', handleRouteChange);

  //   // Clean up the event listener
  //   return () => {
  //     router.events.off('hashChangeStart', handleRouteChange);
  //   };
  // }, [router]);
  // Handlers
  const onClickButtonMorePosts = () => {
    setSection(section + 1)
  }  
  const onScrollWindow = () => {
    const listBounding = listRef.current.getBoundingClientRect()
    const maxScroll = listBounding.height - (4 * window.innerHeight / 5)
    if (listBounding.top * -1 >= maxScroll) {
      setInfiniteScroll(true)
    }  
  }
  return (
    <PostsListStyle { ...props } >
      { categories && <PostsFilterModule posts={ posts } categories={ categories } awards={ type == 'spotlight' ? awards.length !== 0 ? awards : false : false } geographies={ type == 'spotlight' ? geographies.length !== 0 ? geographies : false : false }  multiple={ type == 'spotlight' ? true : false } setPage={ setSection } /> }
      <ul ref={ listRef } className={ `${ type !== 'spotlight' ? 'container-module-large' : '' } list-container type-${ type } ${ posts.length == 0 ? 'no-result-container' : '' }` }>
        { posts.length != 0 ? posts.map((post, index) => {
              return <><li key={ `post-${ section }-${ index }` } className={ `${ type == 'spotlight' ? 'container-module-large' : '' } ${ (index < max * section) ? 'is-show' : 'is-hide' } item-container` }>
                {(() => {
                  switch (type) {
                    case 'spotlight':
                      return <SpotlightCard post={ post } />
                    case 'insight':
                      return <InsightCard post={ post } />
                    case 'resource':
                      return <ResourceCard post={ post } />
                    case 'jury':
                      return <JuryCard post={ post } />
                    case 'project':
                      return <ProjectCard post={ post } />
                  }
                })()}
              </li>
              { index % max == maxPostsBeforeNewsletter && type === 'spotlight' && <li key={ `newsletter-${ section }` } className={ `${ (index < max * section) ? 'is-show' : 'is-hide' } newsletter-container` }><NewsletterModule /></li> }
              </>
          }) : <li key="post-0" className="container-module-large item-container">
            <p className="no-result typography-06">No results...</p>
          </li> }
      </ul>
      { posts.length > max * section && 
        <div className="container-module-large more-posts">
          <ThirstyButton onClickButton={ onClickButtonMorePosts }>Load more</ThirstyButton>
        </div>
      }
      { meta && posts.length <= max * section && maxPages > 1 &&
        <div className="container-module-large more-pages">
          { currentPage !== 1 && <p className="typography-01 arrow-left">{ "<" }</p> }
          { Array.from({ length: maxPagesShow }).map((el, index) => {
            let page = currentPage
            let offset = maxPagesShow % 2 ? Math.floor(maxPagesShow / 2) : Math.floor(maxPagesShow / 2) - 1
            if (page - offset <= 0) {
              offset = page - 1
            } else if (page + offset >= maxPages) {
              offset = maxPagesShow - (maxPages - page) - 1
            }
            page = page + index - offset
            return (
                <button onClick={ () => {
                  router.push({ pathname: router.pathname, query: { ...router.query, page: page } }, undefined, { shallow: true }).then(() => router.reload())
                } } className={ `${ (page == currentPage) ? 'is-active' : '' } page typography-01` }>
                  <p key={ `page-${ index }` } className="typography-01">{ page }</p> 
                </button>
            )
          }) }
          { currentPage !== maxPages && <p className="typography-01 arrow-right">{ ">" }</p> }
        </div>
      }
    </PostsListStyle>
  )
}