// Styles
import { JuryStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"
// Icon
import ExternalLinkIcon from "@/components/icons/ExternalLink"

export default function Jury({ post, ...props }) {
  return (
    <JuryStyle { ...props }>
      <div className="jury-container">
        <div className="visual-container">
          <img src={ post.image.url } alt={ post.image.alt } />
        </div>
        <div className="content-container">
          <div className="informations-container">
            <h3 className="title typography-06">{ limitSizeText(post.name, 40) }</h3>
            <p className="description typography-07">{ limitSizeText(post.description, 100) }</p>
          </div>
        </div>
      </div>
    </JuryStyle>
  )
}