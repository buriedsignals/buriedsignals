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

export default function Like({ likes, liked = false, postId, type = null, ...props }) {
  // Hooks
  const [user] = useStore((state) => [state.user])
  // States
  const [alertSignin, setAlertSignin] = useState(!user.connected)
  const [isLiked, setIsLiked] = useState(user.liked.spotlights.includes(postId))
  const [stateLikes, setStateLikes] = useState(parseInt(likes))
  // Handlers
  const onClickButton = async (e) => {
    e.preventDefault()
    if (user.connected) {
      try {
        let likedSpotlights = null
        if (type != null) {
          likedSpotlights = user.liked.spotlights
          if (likedSpotlights.includes(postId)) {
            likedSpotlights.splice(likedSpotlights.indexOf(postId), 1)
          } else {
            likedSpotlights.push(postId)
          }
        }
        const body = { userId: user.id, postId, likes: isLiked ? stateLikes - 1 : stateLikes + 1, userPostIdsLiked: likedSpotlights };
        await fetch('/api/post-update-spotlights-liked-mh2ea9e02i/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        setStateLikes(isLiked ? stateLikes - 1 : stateLikes + 1)
        setIsLiked(!isLiked)
        if (type) {
          useStore.setState({ liked: { spotlights: likedSpotlights } })
        }
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