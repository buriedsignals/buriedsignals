// Styles
import { ResetPasswordTemplateStyle } from "./index.style"
// Scripts
import { logoutUserCookies } from "@/scripts/utils"
// React
import { useRef, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Layouts
import Layout from "@/components/layouts/main"
// Banners
import ErrorBanner from "@/components/banners/Error"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"


export default function ResetPasswordTemplate({ ...props }) {
  // References
  const formRef = useRef()
  // States
  const [internalError, setInternalError] = useState(false)
  // Router
  const router = useRouter()
  // Handlers
  const onClickButtonResetPassword = async () => {
    const passwordInput = formRef.current.querySelector('.input-password')
    const password = passwordInput.value
    const passwordError = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)
    const passwordConfirmationInput = formRef.current.querySelector('.input-password-confirmation')
    const passwordConfirmation = passwordConfirmationInput.value
    const passwordConfirmationError = password === passwordConfirmation
    
    if (passwordError && passwordConfirmation) {
      try {
        const body = { 
          password: password,
          passwordConfirmation: passwordConfirmation,
          code: router.query.code
        };
        const reponse = await fetch('/api/post-reset-password-user-2c2vzr2iu1/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        if (result.errors) {
          logoutUserCookies()
          setInternalError(true)
        } else {
          document.location.href = window.location.protocol + "//" + window.location.host + '/profiles/signin'
        }
      } catch (error) {
        console.error(error);
        logoutUserCookies()
        setInternalError(true)
      }
    } else {
      if (!passwordError) {
        passwordInput.classList.add("input-error")
      }
      if (!passwordConfirmationError) {
        passwordConfirmationInput.classList.add("input-error")
      }
    }
  }
  return (
    <Layout>
      <ResetPasswordTemplateStyle { ...props }>
        <div className="container-module-extra-small reset-password-container">
          <h1 className="title typography-04">Reset password</h1>
          <div className="form-container">
            <div className="form" ref={ formRef }>
              <div className="inputs-container">
                <input className="typography-01 input-password" type="password" placeholder="Password" />
                <input className="typography-01 input-password-confirmation" type="password" placeholder="Password confirmation" />
              </div>
              <PrimaryButton onClickButton={ onClickButtonResetPassword }>
                <p className="typography-03">Send</p>
              </PrimaryButton>
              <Link href="/profiles/signin">
                <a>
                  <p  className="typography-01">Sign in now</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
      </ResetPasswordTemplateStyle>
    </Layout>
  )
}