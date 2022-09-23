// Styles
import { FlexibleContentStyle } from "./index.style"
// Nodes
import ReactMarkdown from "react-markdown"

export default function FlexibleContent({ content, ...props }) {
  return (
    <FlexibleContentStyle { ...props }>
      {
        content && content.map((item, index) => {
          switch (item.type) {
            case "Body":
              return <ReactMarkdown key={ index }>{ item.markdown }</ReactMarkdown>
            case "Illustration":
              return <img key={ index } src={ item.image.url } alt={ item.image.alt } />
            case "EmbedVideo":
              return <iframe key={ index } src={ item.link } />
          }
        })
      }
    </FlexibleContentStyle>
  )
}