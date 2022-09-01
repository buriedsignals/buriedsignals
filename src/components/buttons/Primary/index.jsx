// Styles
import { PrimaryStyle } from "./index.style"

export default function Primary({ color = "green", onClickButton = () => {}, children, ...props }) {
  return (
    <PrimaryStyle color={ color } onClick={ onClickButton } { ...props }>
      { children }
    </PrimaryStyle>
  )
}