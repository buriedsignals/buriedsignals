// Styles
import { EditStyle } from "./index.style"
// Scripts
import { createImage } from "@/middlewares/librairies/utils"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Banners
import ErrorBanner from "@/components/banners/Error"
// Modals
import ExpertisesModal from "@/components/modals/Expertises"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"
import InstagramIcon from "@/components/icons/Instagram"
import BehanceIcon from "@/components/icons/Behance"
import PortfolioIcon from "@/components/icons/Portfolio"

export default function Edit({ user, setUser, ...props }) {
  // References
  const panelRef = useRef()
  const formRef = useRef()
  const fileRef = useRef(user.image.url)
  // Hooks
  const [modal, setModal] = useToggle(false)
  // States
  const [waiting, setWaiting] = useState(false)
  const [internalError, setInternalError] = useState(false)
  // Effects
  useEffect(() => {
    useStore.setState({ scroll: !modal })
  }, [modal])
  // Handlers
  const onClickButtonEdit = () => {
    setModal(!modal)
    window.scrollTo(0, 0)
  }
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
    if (usernameError && emailError && descriptionError && twitterError && instagramError && behanceError && portfolioError && imageError) {
      try {
        setWaiting(true)
        const body = { 
          id: user.id,
          datas: {
            "username": username,
            "email": email, 
            "Description": description,
            "Type": "Free",
            "Show_in_directory": showDirectory,
            "Portfolio_link": portfolio,
            "Behance_account": behance,
            "Twitter_account": twitter,
            "Instagram_account": instagram,
            "Expertises": expertises.split(',')
          }
        };
        if (image != user.image.url) {
          const imageID = await createImage(image, username)
          body.datas["Image"] = imageID
        }
        const reponse = await fetch('/api/post-update-user-g44man5ubc/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        if (result.errors) {
          setInternalError(true)
        } else {
          setModal(!modal)
          window.scrollTo(0, 0)
          setUser(result)
        }
        setWaiting(false)
      } catch (error) {
        console.error(error);
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
    <EditStyle { ...props }>
      <div className={ `modal${ modal ? ' is-open' : '' }` }></div>
      <SecondaryButton className={ `modal${ modal ? ' is-open' : '' }` } onClickButton={ onClickButtonEdit }>
        <p className="typography-03">Edit</p>
      </SecondaryButton>
      { modal && 
        <>
          <div ref={ panelRef } className="panel-edit">
            <div className="panel-edit-container">
              <h3 className="typography-04">Edit</h3>
              <div ref={ formRef } className="form">
                <div className="inputs-container">
                  <label className="input-talent">
                    <input className="input" type="checkbox" name="checkbox" defaultChecked={ user.show_in_directory } />
                    <p className="typography-01">I want to appear in the talent directory</p>
                  </label>
                  <p className="subtitle typography-01">Profile</p>
                  <label className="input-image" data-value="">
                    <div className="button">
                      <input type="file" accept="image/*" name="image" onChange={ onChangeInputImage } />
                      <img src={ user.image.url } alt={ user.image.alt } />
                    </div>
                    <p className="typography-01">Your Profile Picture</p>
                  </label>
                  <input className="typography-01 input input-username" type="text" placeholder="Your Name" defaultValue={ user.name } />
                  <input className="typography-01 input input-email" type="email" placeholder="Your Email" defaultValue={ user.email } />
                  <textarea className="typography-01 input input-description" name="description" cols="30" rows="7" placeholder="Your Description" defaultValue={ user.description }></textarea>
                  <p className="subtitle typography-01">Expertises</p>
                  <ExpertisesModal expertises={ user.expertises } />
                  <p className="subtitle typography-01">Social</p>
                  <div className="input input-icon">
                    <div className="icon-container">
                      <TwitterIcon size="small" />
                    </div>
                    <input className="typography-01 input-twitter" type="text" placeholder="Your Twitter Account" onChange={ onChangeTwitterAccount } defaultValue={ user.twitter_account } />
                  </div>
                  <div className="input input-icon">
                    <div className="icon-container">
                      <InstagramIcon size="small" />
                    </div>
                    <input className="typography-01 input-instagram" type="text" placeholder="Your Instagram Account" defaultValue={ user.instagram_account } />
                  </div>
                  <div className="input input-icon">
                    <div className="icon-container">
                      <BehanceIcon size="small" />
                    </div>
                    <input className="typography-01 input-behance" type="text" placeholder="Your Behance Account" defaultValue={ user.behance_account } />
                  </div>
                  <div className="input input-icon">
                    <div className="icon-container">
                      <PortfolioIcon size="small" />
                    </div>
                    <input className="typography-01 input-portfolio" type="text" placeholder="Your Website Link" defaultValue={ user.portfolio } />
                  </div>
                </div>
                <PrimaryButton onClickButton={ onClickButtonSignup } waiting={ waiting }>
                  <p className="typography-03">Save</p>
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="panel-back" onClick={ () => setModal(!modal) }></div>
        </>
      }
      { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
    </EditStyle>
  )
}