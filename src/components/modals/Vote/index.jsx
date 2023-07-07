// Styles
import { VoteStyle } from "./index.style"
// Scripts
import { getUserCookies, setCookieObject } from "@/scripts/utils"
// React
import { useEffect, useRef, useState } from "react"
// Next
import { useRouter } from "next/router"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Banners
import SigninBanner from "@/components/banners/Signin"
import ErrorBanner from "@/components/banners/Error"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import CrossIcon from "@/components/icons/Cross"


export default function Vote({ metric, description, postId, votes, ...props }) {
  // Router
  const router = useRouter()
  // Cookies
  const user = getUserCookies()
  // Refernces 
  const panelRef = useRef()
  const formRef = useRef()
  // Hooks
  const [modal, setModal] = useToggle(false)
  // States
  const [indexVote, setIndexVote] = useState(null)
  const [alertSignin, setAlertSignin] = useState(false)
  const [internalError, setInternalError] = useState(false)
  // Effects
  useEffect(() => {
    useStore.setState({ scroll: !modal })
  }, [modal])
  // Handlers
  const onClickButtonVote = () => {
    if (user.connected) {
      setModal(!modal)
      window.scrollTo(0, 0)
    } else {
      setAlertSignin(true)
    }
  }
  const onClickButtonIndex = (e) => {
    setIndexVote(e.currentTarget.dataset.index)
    const indexInput = formRef.current.querySelector('.input-index')
    indexInput.classList.remove("input-error")
  }
  const onClickButtonSubmit = async () => {
    const indexError = indexVote ? false : true
    if (!indexError) {
      try {
        let votedSpotlights = user.voted["spotlights"]
        if (votedSpotlights.some(post => post.id === postId)) {
          votedSpotlights = votedSpotlights.filter(post => post.id !== postId)
        } else {
          votedSpotlights.push({ id: postId })
        }
        let newVotes = [...votes]
        newVotes.push(indexVote)
        newVotes = newVotes.join(',')
        const body = { 
          userId: user.id, 
          postId,
          votes: {
            value: newVotes,
            metric
          },
          userPostIdsVoted: votedSpotlights.map(post => post.id)
        };
        const reponse = await fetch('/api/post-update-spotlights-voted-esap8a1sf5/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await reponse.json()
        if (result.errors) {
          setInternalError(true)
        } else {
          setModal(!modal)
          setIndexVote(null)
          window.scrollTo(0, 0)
          user.voted.spotlights = votedSpotlights
          setCookieObject("voted", user.voted)
          router.reload()
        }
      } catch (error) {
        console.error(error);
        setInternalError(true)
      }
    } else {
      const indexInput = formRef.current.querySelector('.input-index')
      indexInput.classList.add("input-error")
    }
  }
  return (
    <VoteStyle { ...props }>
      <div className={ `modal${ modal ? ' is-open' : '' }` }></div>
      <SecondaryButton className={ `modal${ modal ? ' is-open' : '' }` } onClickButton={ onClickButtonVote }>
        <p className="typography-03">Submit grade</p>
      </SecondaryButton>
      { modal && 
        <>
          <div ref={ panelRef } className="panel-vote">
            <div className="panel-vote-container">
              <button className="close-container" onClick={ () => {
                setModal(!modal)
                setIndexVote(null)
              } }>
                <CrossIcon />
              </button>
              <h3 className="typography-05">Vote</h3>          
              <p className="typography-12 description">{ description }</p>
              <div ref={ formRef } className="form">
                <div className="inputs-container input-index">
                  { Array.from({ length: 10 }).map((el, index) => {
                    return <button key={ `vote-${ index }` } className={ `input-container typography-15 ${ index + 1 == indexVote ? "is-active" : "" }` } data-index={ index + 1 } onClick={ onClickButtonIndex }>
                      { index + 1 }
                    </button>
                  })}
                </div>
                <div className="buttons-container">
                  <PrimaryButton onClickButton={ onClickButtonSubmit }>
                    <p className="typography-03">Submit vote</p>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-back" onClick={ () => {
            setModal(!modal)
            setIndexVote(null)
          } }></div>
        </>
      }
      { alertSignin && <SigninBanner onClickButtonClose={ setAlertSignin } /> }
      { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
    </VoteStyle>
  )
}