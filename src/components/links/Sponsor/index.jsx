// Styles
import { SponsorStyle } from "./index.style"

export default function Sponsor({ href, icon, title, text, ...props }) {
  return (
    <SponsorStyle className="sponsor" href={ href } target="_blank" rel="noopener noreferrer" { ...props }>
      { icon() }
      <p className="text"><span className="typography-13">{ title }</span><span className="typography-01">{ text }</span></p>
    </SponsorStyle>
  )
}