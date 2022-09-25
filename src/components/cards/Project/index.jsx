// Styles
import { ProjectStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"

export default function Project({ post, ...props }) {
  return (
    <ProjectStyle href="https://www.google.com/" target="_blank" rel="noopener noreferrer" { ...props }>
      <div className="project-container">
        <div className="visual-container">
          { post.awards && <div className="awards">
            <p className="typography-13">{ `Project of the ${ post.awards }` }</p>
          </div> }
          <img src={ post.image.url } alt={ post.image.alt } />
        </div>
        <div className="content-container">
          <div className="extras-container">
            <p className="author typography-03">{ post.source.author }</p>
            <div className="categories-container">
              { post.categories.map((category, index) => {
                return <p key={ `category-${index}` } className="category typography-03">{ category }</p>
              }) }
            </div>
          </div>
          <div className="informations-container">
            <h3 className="title typography-06">{ limitSizeText(post.title, 40) }</h3>
            <p className="description typography-07">{ limitSizeText(post.description, 78) }</p>
          </div>
        </div>
      </div>
    </ProjectStyle>
  )
}