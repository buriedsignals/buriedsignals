// Styles
import { SupportStyle } from "./index.style"

export default function Support({ href, icon, title, text, ...props }) {
  return (
    <SupportStyle className="support" href={ href } target="_blank" rel="noopener noreferrer" { ...props }>
      { icon() }
      <p className="text"><span className="typography-13">{ title }</span><span className="typography-01">{ text }</span></p>
    </SupportStyle>
  )
}