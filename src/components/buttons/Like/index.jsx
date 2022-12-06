// Styles
import { LikeStyle } from "./index.style"
// Scripts
import { getUserCookies, setCookieObject } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Nodes
import { setCookie } from "cookies-next"
// Banners
import SigninBanner from "@/components/banners/Signin"
// Icons
import LikeIcon from "@/components/icons/Like"

export default function Like({ likes, liked = false, postId, type = null, ...props }) {
  // Cookies
  const user = getUserCookies()
  // States
  const [alertSignin, setAlertSignin] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [stateLikes, setStateLikes] = useState(parseInt(likes))
  useEffect(() => {
    setIsLiked(user.liked[type].some(post => post.id == postId))
  }, [])
  // Handlers
  const onClickButton = async (e) => {
    e.preventDefault()
    if (user.connected) {
      try {
        let likedSpotlights = user.liked[type]
        if (likedSpotlights.some(post => post.id === postId)) {
          likedSpotlights = likedSpotlights.filter(post => post.id !== postId)
        } else {
          likedSpotlights.push({ id: postId })
        }
        const body = { userId: user.id, postId, likes: isLiked ? stateLikes - 1 : stateLikes + 1, userPostIdsLiked: likedSpotlights.map(post => post.id) };
        await fetch('/api/post-update-spotlights-liked-mh2ea9e02i/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        setStateLikes(isLiked ? stateLikes - 1 : stateLikes + 1)
        setIsLiked(!isLiked)
        if (type) {
          user.liked.spotlights = likedSpotlights
          setCookieObject("liked", user.liked)
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