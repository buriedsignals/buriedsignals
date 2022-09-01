// Styles
import { ThirstyStyle } from "./index.style"

export default function Thirsty({ color = 'white', colorHover = 'green', onClickButton = () => {}, children, ...props }) {
  return (
    <ThirstyStyle color={ color } colorHover={ colorHover } onClick={ onClickButton } { ...props }>
      <p className="typography-08">{ children }</p>
    </ThirstyStyle>
  )
}