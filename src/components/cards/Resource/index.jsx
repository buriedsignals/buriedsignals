// Styles
import { ResourceStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"
// Buttons
import BookmarkButton from "@/components/buttons/Bookmark"
// Icon
import ExternalLinkIcon from "@/components/icons/ExternalLink"

export default function Resource({ post, ...props }) {
  return (
    <>
      <ResourceStyle href={ post.source.url } target="_blank" rel="noopener noreferrer" { ...props }>
        <div className="resource-container">
          <div className="visual-container">
            <img src={ post.image.url } alt={ post.image.alt } />
          </div>
          <div className="content-container">
            <div className="extras-container">
              <div className="text-container">
                <div className="categories-container">
                  { post.categories.map((category, index) => {
                    return <p key={ `category-${index}` } className="category typography-03">{ category }</p>
                  }) }
                </div>
              </div>
              <BookmarkButton bookmarked={ post.bookmarked } postId={ post.id } type="resources"  />
            </div>
            <div className="informations-container">
              <h3 className="title typography-06">{ limitSizeText(post.title, 40) }</h3>
              <p className="description typography-07">{ limitSizeText(post.description, 130) }</p>
            </div>
            <div className="more-container">
              <p className="date typography-13"></p>
              <div className="source-container">
                <p className="source typography-13"> { post.source.title } </p>
                <ExternalLinkIcon />
              </div>
            </div>
          </div>
        </div>
      </ResourceStyle>
    </>
  )
}