// Styles
import { ForgotPasswordTemplateStyle } from "./index.style"
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
import CheckEmailBanner from "@/components/banners/CheckEmail"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"


export default function ForgotPasswordTemplate({ ...props }) {
  // References
  const formRef = useRef()
  // States
  const [internalError, setInternalError] = useState(false)
  const [registered, setRegistered] = useState(false)
  // Router
  const router = useRouter()
  // Handlers
  const onClickButtonForgotPassword = async () => {
    const emailInput = formRef.current.querySelector('.input-email')
    const email = emailInput.value.toLowerCase()
    const emailError = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

    if (emailError) {
      try {
        const body = { 
          email: email
        };
        const reponse = await fetch('/api/post-forgot-password-user-odwqiqg3d9/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        console.log(result)
        if (result.errors || !result.ok) {
          logoutUserCookies()
          setInternalError(true)
        } else {
          setRegistered(true)
        }
      } catch (error) {
        console.error(error);
        logoutUserCookies()
        setInternalError(true)
      }
    } else {
      if (!emailError) {
        emailInput.classList.add("input-error")
      }
    }
  }
  return (
    <Layout>
      <ForgotPasswordTemplateStyle { ...props }>
        <div className="container-module-extra-small forgot-password-container">
          <h1 className="title typography-04">Forgot password</h1>
          <div className="form-container">
            <div className="form" ref={ formRef }>
              <div className="inputs-container">
                <input className="typography-01 input-email" type="email" placeholder="Your E-mail" />
              </div>
              <PrimaryButton onClickButton={ onClickButtonForgotPassword }>
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
        { registered && <CheckEmailBanner onClickButtonClose={ () => {
          document.location.href = window.location.protocol + "//" + window.location.host
        } } /> }
      </ForgotPasswordTemplateStyle>
    </Layout>
  )
}