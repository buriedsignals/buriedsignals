// Styles
import { LikeStyle } from "./index.style"
// React
import { useState } from "react"
// Hooks
import useStore from "@/hooks/useStore"
// Banners
import SigninBanner from "@/components/banners/Signin"
// Icons
import LikeIcon from "@/components/icons/Like"

export default function Like({ likes, liked = false, postId, ...props }) {
  // Hooks
  const [user] = useStore((state) => [state.user])
  // States
  const [alertSignin, setAlertSignin] = useState(false)
  const [isLiked, setIsLiked] = useState(liked)
  const [stateLikes, setStateLikes] = useState(0) // useState(likes) to convert to Int
  // Handlers
  const onClickButton = async (e) => {
    e.preventDefault()
    if (user.connected) {
      try {
        const body = { userId: '1', postId, likes: isLiked ? stateLikes - 1 : stateLikes + 1 };
        await fetch('/api/post-liked-mh2ea9e02i/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        setStateLikes(isLiked ? stateLikes - 1 : stateLikes + 1)
        setIsLiked(!isLiked)
      } catch (error) {
        console.error(error);
      }
    } else {
      setAlertSignin(true)
    }
  }
  return (
    <>
      <LikeStyle className={ isLiked ? "is-liked" : "" } { ...props } onClick={ onClickButton }>
        <div className="like-container">
          <LikeIcon />
          { stateLikes != 0 && <p className="typography-03">{ stateLikes }</p> }
        </div>
      </LikeStyle>
      { alertSignin && <SigninBanner onClickButtonClose={ setAlertSignin } /> }
    </>
  )
}