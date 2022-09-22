// Styles
import { EditStyle } from "./index.style"
// React
import { useEffect, useRef } from "react"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"
import MailIcon from "@/components/icons/Mail"


export default function Edit({ user, ...props }) {
  // Refernces 
  const panelRef = useRef()
  // Hooks
  const [modal, setModal] = useToggle(false)
  // Effects
  useEffect(() => {
    useStore.setState({ scroll: !modal })
  }, [modal])
  // Handlers
  const onClickButtonEdit = () => {
    setModal(!modal)
    window.scrollTo(0, 0)
  }
  const onClickButtonSubmit = () => {}
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
              <div className="form">
                <div className="inputs-container">
                  <div className="input-container">
                    <div className="icon-container">
                      <TwitterIcon size="small" />
                    </div>
                    <input className="typography-01" type="text" defaultValue={ user.twitter_account } />
                  </div>
                  <div className="input-container">
                    <div className="icon-container">
                      <MailIcon size="small" />
                    </div>
                    <input className="typography-01" type="email" defaultValue={ user.email } />
                  </div>
                </div>
                <div className="group-container">
                  <label className="typography-01" htmlFor="description">Description</label>
                  <textarea className="typography-01" name="description" id="description" cols="30" rows="7" defaultValue={ user.description }></textarea>
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
    </EditStyle>
  )
}