// Styles
import { BurgerStyle } from "./index.style"

export default function Burger({ ...props }) {
  return (
    <BurgerStyle { ...props } width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="6" width="28" height="2"/>
      <rect y="20" width="28" height="2"/>
    </BurgerStyle>
  )
}