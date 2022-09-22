// Styles
import { InsightStyle } from "./index.style"
// Scripts
import { getTimeSince, limitSizeText } from "@/scripts/utils"
// Next
import Link from "next/link"
// Buttons
import BookmarkButton from "@/components/buttons/Bookmark"
// Icon
import ExternalLinkIcon from "@/components/icons/ExternalLink"

export default function Insight({ post, ...props }) {
  return (
    <>
      { post.source.url ?
        <InsightStyle href={ post.source.url } target="_blank" rel="noopener noreferrer" { ...props }>
          <div className="insight-container">
            <div className="visual-container">
              <img src={ post.image.url } alt={ post.image.alt } />
            </div>
            <div className="content-container">
              <div className="extras-container">
                <div className="text-container">
                  <p className="author typography-03">{ post.source.author }</p>
                  <div className="categories-container">
                    { post.categories.map((category, index) => {
                      return <p key={ `category-${index}` } className="category typography-03">{ category }</p>
                    }) }
                  </div>
                </div>
                <BookmarkButton bookmarked={ post.bookmarked } postId={ post.id } type="insights"  />
              </div>
              <div className="informations-container">
                <h3 className="title typography-06">{ limitSizeText(post.title, 40) }</h3>
                <p className="description typography-07">{ limitSizeText(post.description, 130) }</p>
              </div>
              <div className="more-container">
                <p className="date typography-13">{ getTimeSince(post.published_at) }</p>
                <div className="source-container">
                  <p className="source typography-13"> { post.source.title } </p>
                  <ExternalLinkIcon />
                </div>
              </div>
            </div>
          </div>
        </InsightStyle>
        :
        <Link href={ `insights/${ post.slug }` }>
          <InsightStyle { ...props }>
            <div className="insight-container">
              <div className="visual-container">
                <img src={ post.image.url } alt={ post.image.alt } />
              </div>
              <div className="content-container">
                <div className="extras-container">
                  <div className="text-container">
                    <p className="author typography-03">{ post.source.author }</p>
                    <div className="categories-container">
                      { post.categories.map((category, index) => {
                        return <p key={ `category-${index}` } className="category typography-03">{ category }</p>
                      }) }
                    </div>
                  </div>
                  <BookmarkButton bookmarked={ post.bookmarked } postId={ post.id } type="insights" />
                </div>
                <div className="informations-container">
                  <h3 className="title typography-06">{ limitSizeText(post.title, 40) }</h3>
                  <p className="description typography-07">{ limitSizeText(post.description, 130) }</p>
                </div>
                <div className="more-container">
                  <p className="date typography-13">{ getTimeSince(post.published_at) }</p>
                </div>
              </div>
            </div>
          </InsightStyle>
        </Link>
      }
    </>
  )
}