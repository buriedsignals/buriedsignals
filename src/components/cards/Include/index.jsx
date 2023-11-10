// Styles
import { IncludeStyle } from "./index.style"

export default function Include({ text, soon = false, ...props }) {
  return (
    <>
      <IncludeStyle { ...props }>
        <div className="include-container">
          <p className="typography-18" dangerouslySetInnerHTML={{ __html: `${ text } ${ soon ? <span className="soon">(coming soon)</span> : ''}` }}></p>
        </div>
      </IncludeStyle>
    </>
  )
}