// Styles
import { SecondaryStyle } from "./index.style"

export default function Secondary({ onClickButton = () => {}, children, ...props }) {
  return (
    <SecondaryStyle onClick={ onClickButton } { ...props }>
      <div className="secondary-container">
        { children }
      </div>
    </SecondaryStyle>
  )
}