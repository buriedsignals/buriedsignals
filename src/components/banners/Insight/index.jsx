// Styles
import { InsightStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"

export default function Insight({ post, ...props }) {
  return (
    <InsightStyle { ...props }>
      <div className="insight-container">
        <div className="visual-container">
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
            <h1 className="title typography-06">{ limitSizeText(post.title, 40) }</h1>
            <p className="description typography-24">{ limitSizeText(post.description, 237) }</p>
          </div>
        </div>
      </div>
    </InsightStyle>
  )
}