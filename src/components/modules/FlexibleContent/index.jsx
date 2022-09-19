// Styles
import { FlexibleContentStyle } from "./index.style"
// Nodes
import ReactMarkdown from "react-markdown"

export default function FlexibleContent({ content, ...props }) {
  return (
    <FlexibleContentStyle { ...props }>
      {
        content.map(item => {
          switch (item.type) {
            case "Body":
              return <ReactMarkdown source={ item.markdown } escapeHtml={ true } />
            case "Illustration":
              return <img src={ item.image.url } alt={ item.image.alt } />
            case "EmbedVideo":
              return <iframe src={ item.link } />
          }
        })
      }
    </FlexibleContentStyle>
  )
}