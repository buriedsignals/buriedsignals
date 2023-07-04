// Styles
import { ThirstyStyle } from "./index.style"

export default function Thirsty({ color = 'white', colorHover = 'green', size = 'medium', href, children, ...props }) {
  return (
    <ThirstyStyle color={ color } colorHover={ colorHover } size={ size } href={ href } target="_blank" rel="noopener noreferrer" { ...props }>
      <p className={ `typography-${ size == "small" ? "10" : "08" }` }>{ children }</p>
    </ThirstyStyle>
  )
}