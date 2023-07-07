// Styles
import { JuryStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"
// Icon
import ExternalLinkIcon from "@/components/icons/ExternalLink"

export default function Jury({ post, ...props }) {
  return (
    <>
      { (post.portfolio && post.portfolio.length != 0) ?
        <a href={ post.portfolio } target="_blank" rel="noopener noreferrer">
          <JuryStyle { ...props }>
            <div className="jury-container">
              <div className="visual-container">
                <img src={ post.image.url } alt={ post.image.alt } />
              </div>
              <div className="content-container">
                <div className="informations-container">
                  <h2 className="title typography-06">{ limitSizeText(post.name, 40) }</h2>
                  <p className="description typography-11">{ limitSizeText(post.description, 125) }</p>
                </div>
              </div>
            </div>
          </JuryStyle>
        </a>
        :
        <JuryStyle { ...props }>
          <div className="jury-container">
            <div className="visual-container">
              <img src={ post.image.url } alt={ post.image.alt } />
            </div>
            <div className="content-container">
              <div className="informations-container">
                <h2 className="title typography-06">{ limitSizeText(post.name, 40) }</h2>
                <p className="description typography-11">{ limitSizeText(post.description, 125) }</p>
              </div>
            </div>
          </div>
        </JuryStyle>
      }
    </>
  )
}