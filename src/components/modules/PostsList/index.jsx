// Styles
import { PostsListStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useArray from "@/hooks/useArray"
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

export default function PostsList({ type, posts, categories, awards = [], geographies = [], max = 5, ...props }) {
  // References
  const listRef = useRef()
  // States
  const [page, setPage] = useState(1)
  const [infiniteScroll, setInfiniteScroll] = useState(false)
  // Hooks
  posts = useArray(posts)
  // Effects
  useEffect(() => {
    window.addEventListener('scroll', onScrollWindow)
    return () => {
      window.removeEventListener('scroll', onScrollWindow)
    }
  }, [])
  useEffect(() => {
    if (infiniteScroll) {
      setPage(page + 1)
      setInfiniteScroll(false)
    }
  }, [infiniteScroll])
  // Handlers
  const onClickButtonMorePosts = () => {
    setPage(page + 1)
  }  
  const onScrollWindow = () => {
    const listBounding = listRef.current.getBoundingClientRect()
    const maxScroll = listBounding.height - (2 * window.innerHeight / 3)
    if (listBounding.top * -1 >= maxScroll) {
      setInfiniteScroll(true)
    }  

  }
  return (
    <PostsListStyle { ...props } >
      { categories && <PostsFilterModule posts={ posts } categories={ categories } awards={ type == 'spotlight' ? awards.length !== 0 ? awards : false : false } geographies={ type == 'spotlight' ? geographies.length !== 0 ? geographies : false : false }  multiple={ type == 'spotlight' ? true : false } setPage={ setPage } /> }
      <ul  ref={ listRef } className={ `${ type !== 'spotlight' ? 'container-module-large' : '' } list-container type-${ type } ${ posts.array.length == 0 ? 'no-result-container' : '' }` }>
        { posts.array.length != 0 ? posts.array.map((post, index) => {
            if (index < max * page) {
              return <><li key={ `post-${ index }` } className={ `${ type == 'spotlight' ? 'container-module-large' : '' } item-container` }>
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
              { index % max == 5 && <NewsletterModule /> }
              </>

            }
          }) : <li className="container-module-large item-container">
            <p className="no-result typography-06">No results...</p>
          </li> }
      </ul>
      { posts.array.length > max * page && 
        <div className="container-module-large more-posts">
          <ThirstyButton onClickButton={ onClickButtonMorePosts }>Load more</ThirstyButton>
        </div>
      }
    </PostsListStyle>
  )
}