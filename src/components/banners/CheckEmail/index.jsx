// Styles
import { CheckEmailStyle } from "./index.style"
// React
import { useRef } from "react"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"


export default function CheckEmail({ onClickButtonClose, ...props }) {
  // Refernces 
  const panelRef = useRef()
  return (
    <CheckEmailStyle { ...props }>
      <div ref={ panelRef } className="panel-check-email">
        <div className="panel-check-email-container">
          <h3 className="typography-08">Please check your email</h3>
          <p className="typography-07 description">We've sent you an email !</p>
          <div className="buttons-container">
            <PrimaryButton color="black02" onClickButton={ (e) => { 
              e.preventDefault()
              onClickButtonClose(false)
            } }>
              <p className="typography-03">Close</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </CheckEmailStyle>
  )
}