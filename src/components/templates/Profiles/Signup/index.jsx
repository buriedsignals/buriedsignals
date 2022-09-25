// Styles
import { SignupTemplateStyle } from "./index.style"
// Scripts
import { loginUserCookies, logoutUserCookies, transformToSlug } from "@/scripts/utils"
// React
import { useRef, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Layouts
import Layout from "@/components/layouts/main"
// Banners
import ErrorBanner from "@/components/banners/Error"
import ValidateEmailBanner from "@/components/banners/ValidateEmail"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"

export default function SignupTemplate({ ...props }) {
  // References
  const formRef = useRef()
  // States
  const [internalError, setInternalError] = useState(false)
  const [registered, setRegistered] = useState(false)
  // Router
  const router = useRouter()
  // Handlers
  const onClickButtonSignup = async () => {
    const usernameInput = formRef.current.querySelector('.input-username')
    const username = usernameInput.value
    const usernameError = /(^[A-Za-zÀ-ÿ]{3,16})?([ ]{0,1})([A-Za-zÀ-ÿ]{3,16})?([ ]{0,1})?([A-Za-zÀ-ÿ]{3,16})?([ ]{0,1})?([A-Za-zÀ-ÿ]{3,16})/.test(username)
    const emailInput = formRef.current.querySelector('.input-email')
    const email = emailInput.value.toLowerCase()
    const emailError = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    const passwordInput = formRef.current.querySelector('.input-password')
    const password = passwordInput.value
    const passwordError = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)
    const slug = transformToSlug(username)
    const twitterInput = formRef.current.querySelector('.input-twitter')
    const twitter = twitterInput.value
    const twitterError = /@([A-Za-z0-9_]+)/.test(twitter)
    const descriptionInput = formRef.current.querySelector('.input-description')
    const description = descriptionInput.value
    const descriptionError = description.length > 0
    if (usernameError && emailError && passwordError && twitterError && descriptionError) {
      try {
        const body = { 
          datasRegister: {
            "username": username,
            "email": email, 
            "password": password
          },
          datasUpdateUser: {
            "Slug": transformToSlug(username),
            "Twitter_account": twitter,
            "Description": description
          }
        };
        const reponse = await fetch('/api/post-create-user-9ha71tnmfm/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        console.log(result)
        if (result.errors) {
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
      if (!usernameError) {
        usernameInput.classList.add("input-error")
      }
      if (!emailError) {
        emailInput.classList.add("input-error")
      }
      if (!passwordError) {
        passwordInput.classList.add("input-error")
      }
      if (!twitterError) {
        twitterInput.classList.add("input-error")
      }
      if (!descriptionError) {
        descriptionInput.classList.add("input-error")
      }
    }
  }
  const onChangeTwitterAccount = (e) => {
    const account = e.target.value
    e.target.value = account == "" ? "" : account.startsWith("@") ? account : `@${account}`
  }
  return (
    <Layout>
      <SignupTemplateStyle { ...props }>
        <div className="container-module-extra-small signup-container">
          <h1 className="title typography-04">Sign up</h1>
          <div className="form-container">
            {/* <a href="" className="connect-twitter">
              <TwitterIcon />
              <p className="typography-17">Sign up with Twitter</p>
            </a>
            <p className="label typography-01">Sign up with e-mail</p> */}
            <div ref={ formRef } className="form">
              <div className="inputs-container">
                <input className="typography-01 input-username" type="text" placeholder="Your Name" />
                <input className="typography-01 input-email" type="email" placeholder="Your E-mail" />
                <input className="typography-01 input-password" type="password" placeholder="Your Password" />
                <input className="typography-01 input-twitter" type="text" placeholder="Your Twitter Account" onChange={ onChangeTwitterAccount } />
                <textarea className="typography-01 input-description" name="description" cols="30" rows="7" placeholder="Your Description"></textarea>
              </div>
              <PrimaryButton onClickButton={ onClickButtonSignup }>
                <p className="typography-03">Sign up</p>
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
        { !registered && <ValidateEmailBanner onClickButtonClose={ () => {
          document.location.href = window.location.protocol + "//" + window.location.host
        } } /> }
      </SignupTemplateStyle>
    </Layout>
  )
}