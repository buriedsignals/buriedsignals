// Styles
import { SigninStyle } from "./index.style"
// React
import { useRef } from "react"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Links
import PrimaryLink from "@/components/links/Primary"


export default function Signin({ onClickButtonClose, ...props }) {
  // Refernces 
  const panelRef = useRef()
  const onClickTest = (e) => {
    e.preventDefault();
  }
  return (
    <SigninStyle { ...props } onClick={ onClickTest }>
      <div ref={ panelRef } className="panel-signin">
        <div className="panel-signin-container">
          <h3 className="typography-08">Howdy!</h3>
          <p className="typography-07 description">We need you to sign in for that.</p>
          <div className="buttons-container">
            <PrimaryLink href="/profiles/signin">
              <p className="typography-03">Sign In</p>
            </PrimaryLink>
            <PrimaryButton color="black03" onClickButton={ (e) => { 
              e.preventDefault()
              onClickButtonClose(false)
            } }>
              <p className="typography-03">Cancel</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </SigninStyle>
  )
}