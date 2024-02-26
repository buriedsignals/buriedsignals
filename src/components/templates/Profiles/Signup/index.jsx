// Styles
import { SignupTemplateStyle } from "./index.style"
// Scripts
import { loginUserCookies, logoutUserCookies, transformToSlug } from "@/scripts/utils"
import { createImage } from "@/middlewares/librairies/utils"
// React
import { useEffect, useRef, useState } from "react"
// Next
import Link from "next/link"
// Layouts
import Layout from "@/components/layouts/main"
// Banners
import ErrorBanner from "@/components/banners/Error"
import ValidateEmailBanner from "@/components/banners/ValidateEmail"
// Modals
import ExpertisesModal from "@/components/modals/Expertises"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"
import InstagramIcon from "@/components/icons/Instagram"
import BehanceIcon from "@/components/icons/Behance"
import PortfolioIcon from "@/components/icons/Portfolio"

export default function SignupTemplate({ categories, ...props }) {
  // References
  const formRef = useRef()
  const fileRef = useRef()
  // States
  const [waiting, setWaiting] = useState(false)
  const [internalError, setInternalError] = useState(false)
  const [registered, setRegistered] = useState(false)
  // Handlers
  const onChangeInputImage = (e) => {
    fileRef.current = e.target.files[0]
    const value = e.target.value
    const parentEl = e.target.parentNode
    const imageEl = parentEl.querySelector('.button img')
    const labelEl = parentEl.parentNode.querySelector('p')
    if (fileRef.current) {
      const reader = new FileReader()
      reader.readAsDataURL(fileRef.current)
      reader.onload = function(e) {
        imageEl.src = e.target.result
        labelEl.innerHTML = fileRef.current.name
      }
    }
  }
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
    const imageInput = formRef.current.querySelector('.input-image')
    const image = fileRef.current
    const imageError = image != null
    const descriptionInput = formRef.current.querySelector('.input-description')
    const description = descriptionInput.value
    const descriptionError = true
    const expertisesInput = formRef.current.querySelector('.input-expertises')
    const expertises = expertisesInput.dataset.value
    const expertisesError = expertises != ''
    const twitterInput = formRef.current.querySelector('.input-twitter')
    const twitter = twitterInput.value
    const twitterError = /@([A-Za-z0-9_]+)/.test(twitter) || twitter == ''
    const instagramInput = formRef.current.querySelector('.input-instagram')
    const instagram = instagramInput.value
    const instagramError = /([A-Za-z0-9_]+)/.test(instagram) || instagram == ''
    const behanceInput = formRef.current.querySelector('.input-behance')
    const behance = behanceInput.value
    const behanceError = /([A-Za-z0-9_]+)/.test(behance) || behance == ''
    const portfolioInput = formRef.current.querySelector('.input-portfolio')
    const portfolio = portfolioInput.value
    const portfolioError = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(portfolio) || portfolio == ''
    const showDirectoryInput = formRef.current.querySelector('.input-talent input')
    const showDirectory = showDirectoryInput.checked
    if (usernameError && emailError && passwordError && descriptionError && twitterError && instagramError && behanceError && portfolioError && imageError) {
      try {
        setWaiting(true)
        const imageID = await createImage(image, username)
        const body = { 
          datasRegister: {
            "username": username,
            "email": email, 
            "password": password
          },
          datasUpdateUser: {
            "Slug": transformToSlug(username),
            "Description": description,
            "Show_in_directory": showDirectory,
            "Image": imageID,
            "Portfolio_link": portfolio,
            "Behance_account": behance,
            "Twitter_account": twitter,
            "Instagram_account": instagram,
            "Expertises": expertises.split(',')
          }
        };
        const reponse = await fetch('/api/post-create-user-9ha71tnmfm/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        if (result.errors) {
          logoutUserCookies()
          setInternalError(true)
        } else {
          setRegistered(true)
        }
        setWaiting(false)
      } catch (error) {
        console.error('catch', error);
        logoutUserCookies()
        setInternalError(true)
        setWaiting(false)
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
      if (!imageError) {
        imageInput.classList.add("input-error")
      }
      if (!descriptionError) {
        descriptionInput.classList.add("input-error")
      }
      if (!expertisesError) {
        expertisesInput.classList.add("input-error")
      }
      if (!twitterError) {
        twitterInput.parentNode.classList.add("input-error")
      }
      if (!instagramError) {
        instagramInput.parentNode.classList.add("input-error")
      }
      if (!behanceError) {
        behanceInput.parentNode.classList.add("input-error")
      }
      if (!portfolioError) {
        portfolioInput.parentNode.classList.add("input-error")
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
            <div ref={ formRef } className="form">
              <div className="inputs-container">
                <label className="input-talent">
                  <input className="input" type="checkbox" name="checkbox" />
                  <p className="typography-01">I want to appear in the experts directory</p>
                </label>
                <p className="subtitle typography-01">Profile</p>
                <label className="input-image" data-value="">
                  <div className="button">
                    <input type="file" accept="image/*" name="image" onChange={ onChangeInputImage } />
                    <img src="" alt="" />
                  </div>
                  <p className="typography-01">Your Profile Picture</p>
                </label>
                <input className="typography-01 input input-username" type="text" placeholder="Your Name" />
                <input className="typography-01 input input-email" type="email" placeholder="Your Email" />
                <input className="typography-01 input input-password" type="password" placeholder="Your Password" />
                <textarea className="typography-01 input input-description" name="description" cols="30" rows="7" placeholder="Your Description"></textarea>
                <p className="subtitle typography-01">Expertises</p>
                <ExpertisesModal expertises={ categories } />
                <p className="subtitle typography-01">Social</p>
                <div className="input input-icon">
                  <div className="icon-container">
                    <TwitterIcon size="small" />
                  </div>
                  <input className="typography-01 input-twitter" type="text" placeholder="Your Twitter Account" onChange={ onChangeTwitterAccount } />
                </div>
                <div className="input input-icon">
                  <div className="icon-container">
                    <InstagramIcon size="small" />
                  </div>
                  <input className="typography-01 input-instagram" type="text" placeholder="Your Instagram Account" />
                </div>
                <div className="input input-icon">
                  <div className="icon-container">
                    <BehanceIcon size="small" />
                  </div>
                  <input className="typography-01 input-behance" type="text" placeholder="Your Behance Account" />
                </div>
                <div className="input input-icon">
                  <div className="icon-container">
                    <PortfolioIcon size="small" />
                  </div>
                  <input className="typography-01 input-portfolio" type="text" placeholder="Your Website Link" />
                </div>
              </div>
              <PrimaryButton onClickButton={ onClickButtonSignup } waiting={ waiting }>
                <p className="typography-03">Sign up</p>
              </PrimaryButton>
              <Link href="/profiles/signin">
                <a className="more-action">
                  <p  className="typography-01">Sign in now</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
        { registered && <ValidateEmailBanner onClickButtonClose={ () => {
          document.location.href = window.location.protocol + "//" + window.location.host
        } } /> }
      </SignupTemplateStyle>
    </Layout>
  )
}