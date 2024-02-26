// Styles
import { SigninTemplateStyle } from "./index.style"
// Scripts
import { getUserCookies, loginUserCookies, logoutUserCookies } from "@/scripts/utils"
// React
import { useRef, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Hooks
import useStore from "@/hooks/useStore"
// Layouts
import Layout from "@/components/layouts/main"
// Banners
import ErrorBanner from "@/components/banners/Error"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"

import { getCookies } from "cookies-next";


export default function SigninTemplate({ ...props }) {
  // References
  const formRef = useRef()
  // States
  const [waiting, setWaiting] = useState(false)
  const [internalError, setInternalError] = useState(false)
  // Router
  const router = useRouter()
  // Hooks
  const [previousPath] = useStore((state) => [state.previousPath])
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
        setWaiting(true)
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
          const storage = globalThis?.sessionStorage;
          if (previousPath !== null && previousPath !== "/profiles/signin" && previousPath !== "/profiles/signup" && previousPath !== "/profiles/signout" && previousPath !== "/profiles/forgot-password" && previousPath !== "/profiles/reset-password") {
            document.location.href = window.location.protocol + "//" + window.location.host + previousPath
          } else if (result.slug) {
            document.location.href = window.location.protocol + "//" + window.location.host + "/profiles/" + result.slug
          } else {
            document.location.href = window.location.protocol + "//" + window.location.host
          }
        }
        setWaiting(false)
      } catch (error) {
        console.error(error);
        logoutUserCookies()
        setInternalError(true)
        setWaiting(false)
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
            <div className="form" ref={ formRef }>
              <div className="inputs-container">
                <input className="typography-01 input-email" type="email" placeholder="Your E-mail" />
                <input className="typography-01 input-password" type="password" placeholder="Password" />
              </div>
              <PrimaryButton onClickButton={ onClickButtonSignin } waiting={ waiting }>
                <p className="typography-03">Sign in</p>
              </PrimaryButton>
              <div className="links">
                <Link href="/events">
                  <a>
                    <p  className="typography-01">Become a member</p>
                  </a>
                </Link>
                <Link href="/profiles/forgot-password">
                  <a>
                    <p  className="typography-01">Password reset</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
      </SigninTemplateStyle>
    </Layout>
  )
}