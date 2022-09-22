// Styles
import { PostsListStyle } from "./index.style"
// React
import { useEffect, useState } from "react"
// Hooks
import useArray from "@/hooks/useArray"
// Modules
import PostsFilterModule from "../PostsFilter"
// Cards
import SpotlightCard from "@/components/cards/Spotlight"
import InsightCard from "@/components/cards/Insight"
import ResourceCard from "@/components/cards/Resource"
import JuryCard from "@/components/cards/Jury"
import ProjectCard from "@/components/cards/Project"
// Buttons
import ThirstyButton from "@/components/buttons/Thirsty"

export default function PostsList({ type, posts, categories, awards = [], max = 5, ...props }) {
  // States
  const [page, setPage] = useState(1)
  // Hooks
  posts = useArray(posts)
  // Handlers
  const onClickButtonMorePosts = () => {
    setPage(page + 1)
  }  
  return (
    <PostsListStyle { ...props } >
      { categories && <PostsFilterModule posts={ posts } categories={ categories } awards={ type == 'spotlight' ? awards.length !== 0 ? awards : false : false }  multiple={ type == 'spotlight' ? true : false } setPage={ setPage } /> }
      <ul className={ `${ type !== 'spotlight' ? 'container-module-large' : '' } list-container type-${ type }` }>
        { posts.array.length != 0 ? posts.array.map((post, index) => {
            if (index < max * page) {
              return <li key={ `post-${ index }` } className={ `${ type == 'spotlight' ? 'container-module-large' : '' } item-container` }>
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