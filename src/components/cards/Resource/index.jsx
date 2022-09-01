// Styles
import { ResourceStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"
// Icon
import ExternalLinkIcon from "@/components/icons/ExternalLink"

export default function Resource({ post, ...props }) {
  return (
    <ResourceStyle href={ post.source.url } target="_blank" rel="noopener noreferrer" { ...props }>
      <div className="resource-container">
        <div className="visual-container">
          <img src={ post.image.url } alt={ post.image.alt } />
        </div>
        <div className="content-container">
          <div className="informations-container">
            <h3 className="title typography-06">{ limitSizeText(post.title, 40) }</h3>
            <p className="description typography-07">{ limitSizeText(post.description, 80) }</p>
          </div>
          <div className="more-container">
            <div className="source-container">
              <p className="source typography-13">{ post.source.title }</p>
              <ExternalLinkIcon />
            </div>
          </div>
        </div>
      </div>
    </ResourceStyle>
  )
}