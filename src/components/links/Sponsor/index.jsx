// Styles
import { SponsorStyle } from "./index.style"

export default function Sponsor({ href, icon, text, ...props }) {
  return (
    <SponsorStyle href={ href } target="_blank" rel="noopener noreferrer" { ...props }>
      { icon() }
      <p className="text"><span className="typography-13">Partner of</span><span className="typography-01">{ text }</span></p>
    </SponsorStyle>
  )
}