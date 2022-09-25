// Styles
import { SpotlightStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"
// Buttons
import LikeButton from "@/components/buttons/Like"
import BookmarkButton from "@/components/buttons/Bookmark"
import CommentButton from "@/components/buttons/Comment"

export default function Spotlight({ post, ...props }) {
  return (
    <SpotlightStyle { ...props }>
      <div className="spotlight-container">
        <div className="visual-container">
          { post.awards && <div className="awards">
            <p className="typography-13">{ `Spotlight of the ${ post.awards }` }</p>
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
          <div className="actions-container">
            <LikeButton likes={ post.likes } liked={ post.liked } postId={ post.id } type="spotlights" />
            <BookmarkButton bookmarked={ post.bookmarked } postId={ post.id } type="spotlights"  />
            <CommentButton comments={ post.comments_length } />
          </div>
        </div>
      </div>
    </SpotlightStyle>
  )
}