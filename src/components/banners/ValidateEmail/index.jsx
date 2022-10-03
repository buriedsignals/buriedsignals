// Styles
import { ValidateEmailStyle } from "./index.style"
// React
import { useRef } from "react"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"


export default function ValidateEmail({ onClickButtonClose, ...props }) {
  // Refernces 
  const panelRef = useRef()
  return (
    <ValidateEmailStyle { ...props }>
      <div ref={ panelRef } className="panel-validate-email">
        <div className="panel-validate-email-container">
          <h3 className="typography-08">Glad to have you with us!</h3>
          <p className="typography-07 description">We've sent you an email, you'll need it to sign in!</p>
          <div className="buttons-container">
            <PrimaryButton color="white" onClickButton={ (e) => { 
              e.preventDefault()
              onClickButtonClose(false)
            } }>
              <p className="typography-03">Close</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ValidateEmailStyle>
  )
}