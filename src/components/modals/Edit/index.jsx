// Styles
import { EditStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Banners
import ErrorBanner from "@/components/banners/Error"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"
import MailIcon from "@/components/icons/Mail"


export default function Edit({ user, setUser, ...props }) {
  // Refernces 
  const panelRef = useRef()
  const formRef = useRef()
  // Hooks
  const [modal, setModal] = useToggle(false)
  // States
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
  const onClickButtonSubmit = async () => {
    const emailInput = formRef.current.querySelector('.input-email')
    const email = emailInput.value.toLowerCase()
    const emailError = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    const twitterInput = formRef.current.querySelector('.input-twitter')
    const twitter = twitterInput.value
    const twitterError = /@([A-Za-z0-9_]+)/.test(twitter)
    const descriptionInput = formRef.current.querySelector('.input-description')
    const description = descriptionInput.value
    const descriptionError = description.length > 0
    if (emailError && twitterError && descriptionError) {
      try {
        const body = { 
          id: user.id,
          datas: {
            "email": email, 
            "Twitter_account": twitter,
            "Description": description
          }
        };
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
      } catch (error) {
        console.error(error);
        setInternalError(true)
      }
    } else {
      if (!emailError) {
        emailInput.parentElement.classList.add("input-error")
      }
      if (!twitterError) {
        twitterInput.parentElement.classList.add("input-error")
      }
      if (!descriptionError) {
        descriptionInput.parentElement.classList.add("input-error")
      }
    }
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
                  <div className="input-container">
                    <div className="icon-container">
                      <TwitterIcon size="small" />
                    </div>
                    <input className="typography-01 input-twitter" type="text" defaultValue={ user.twitter_account } />
                  </div>
                  <div className="input-container">
                    <div className="icon-container">
                      <MailIcon size="small" />
                    </div>
                    <input className="typography-01 input-email" type="email" defaultValue={ user.email } />
                  </div>
                </div>
                <div className="group-container">
                  <label className="typography-01" htmlFor="description">Description</label>
                  <textarea className="typography-01 input-description" name="description" id="description" cols="30" rows="7" defaultValue={ user.description }></textarea>
                </div>
                <div className="buttons-container">
                  <PrimaryButton onClickButton={ onClickButtonSubmit }>
                    <p className="typography-03">Save</p>
                  </PrimaryButton>
                  <PrimaryButton color="black03" onClickButton={ () => setModal(!modal) }>
                    <p className="typography-03">Cancel</p>
                  </PrimaryButton>
                </div>
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