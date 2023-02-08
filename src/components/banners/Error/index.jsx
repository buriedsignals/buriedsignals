// Styles
import { ErrorStyle } from "./index.style"
// React
import { useRef } from "react"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Links
import PrimaryLink from "@/components/links/Primary"


export default function Error({ onClickButtonClose, ...props }) {
  // Refernces 
  const panelRef = useRef()
  return (
    <ErrorStyle { ...props }>
      <div ref={ panelRef } className="panel-error">
        <div className="panel-error-container">
          <h3 className="typography-08">Oh it seems we’re out of reception for some reason.</h3>
          <p className="typography-07 description">We’ll fix this, quickly!</p>
          <div className="buttons-container">
            <PrimaryButton color="black03" onClickButton={ (e) => { 
              e.preventDefault()
              onClickButtonClose(false)
            } }>
              <p className="typography-03">Cancel</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ErrorStyle>
  )
}