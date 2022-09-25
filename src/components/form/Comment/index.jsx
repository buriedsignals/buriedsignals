// Styles
import { FormStyle } from "./index.style"
// React
import { useRef, useState } from "react"
// Next
import { useRouter } from "next/router"
// Banners
import SigninBanner from "@/components/banners/Signin"
import ErrorBanner from "@/components/banners/Error"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"

export default function Form({ onClickButton, value = "", ...props }) {
  // References
  const formRef = useRef()
  // States
  const [alertSignin, setAlertSignin] = useState(false)
  const [internalError, setInternalError] = useState(false)
  // Router
  const router = useRouter()
  return (
    <>
      <FormStyle { ...props }>
        <div ref={ formRef } className="add-form">
          <div className="input-container">
            <input className="typography-12 input-comment" type="text" placeholder="Add a comment..." defaultValue={ value } />
          </div>
          <PrimaryButton color="blue" onClick={ () => onClickButton(formRef, setAlertSignin, setInternalError) }>
            <p className="typography-03">Send</p>
          </PrimaryButton>
        </div>
      </FormStyle>
      { alertSignin && <SigninBanner onClickButtonClose={ setAlertSignin } /> }
      { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
    </>
  )
}