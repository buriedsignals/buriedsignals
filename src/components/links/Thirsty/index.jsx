// Styles
import { ThirstyStyle } from "./index.style"

export default function Thirsty({ color = 'white', colorHover = 'green', href, children, ...props }) {
  return (
    <ThirstyStyle color={ color } colorHover={ colorHover } href={ href } target="_blank" rel="noopener noreferrer" { ...props }>
      <p className="typography-08">{ children }</p>
    </ThirstyStyle>
  )
}