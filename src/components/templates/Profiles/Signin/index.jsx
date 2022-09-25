// Styles
import { SigninTemplateStyle } from "./index.style"
// Scripts
import { loginUserCookies, logoutUserCookies } from "@/scripts/utils"
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
// Icons
import TwitterIcon from "@/components/icons/Twitter"

export default function SigninTemplate({ ...props }) {
  // References
  const formRef = useRef()
  // States
  const [internalError, setInternalError] = useState(false)
  // Router
  const router = useRouter()
  // Handlers
  const onClickButtonSignin = async () => {
    const emailInput = formRef.current.querySelector('.input-email')
    const email = emailInput.value.toLowerCase()
    const emailError = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    const passwordInput = formRef.current.querySelector('.input-password')
    const password = passwordInput.value
    const passwordError = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)
    
    if (emailError && passwordError) {
      try {
        const body = { 
          datas: {
            "identifier": email, 
            "password": password,
          }
        };
        const reponse = await fetch('/api/post-login-user-6fh5q7mr50/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        if (result.errors) {
          logoutUserCookies()
          setInternalError(true)
        } else {
          loginUserCookies(result)
          router.push("/")
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
      if (!passwordError) {
        passwordInput.classList.add("input-error")
      }
    }
  }
  return (
    <Layout>
      <SigninTemplateStyle { ...props }>
        <div className="container-module-extra-small signin-container">
          <h1 className="title typography-04">Sign in</h1>
          <div className="form-container">
            {/* <a href="" className="connect-twitter">
              <TwitterIcon />
              <p className="typography-17">Sign in with Twitter</p>
            </a>
            <p className="label typography-01">Sign in with e-mail</p> */}
            <div className="form" ref={ formRef }>
              <div className="inputs-container">
                <input className="typography-01 input-email" type="email" placeholder="Your E-mail" />
                <input className="typography-01 input-password" type="password" placeholder="Password" />
              </div>
              <PrimaryButton onClickButton={ onClickButtonSignin }>
                <p className="typography-03">Sign in</p>
              </PrimaryButton>
              <Link href="/profiles/signup">
                <a>
                  <p  className="typography-01">Sign up now</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
      </SigninTemplateStyle>
    </Layout>
  )
}