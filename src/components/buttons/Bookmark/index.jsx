// Styles
import { BookmarkStyle } from "./index.style"
// React
import { useState } from "react"
// Hooks
import useStore from "@/hooks/useStore"
// Banners
import SigninBanner from "@/components/banners/Signin"
// Icons
import BookmarkIcon from "@/components/icons/Bookmark"

export default function Bookmark({ bookmarked = false, postId, ...props }) {
  // Hooks
  const [user] = useStore((state) => [state.user])
  // States
  const [alertSignin, setAlertSignin] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(bookmarked)
  // Handlers
  const onClickButton = async (e) => {
    e.preventDefault()
    if (user.connected) {
      try {
        const body = { userId: '1', postId };
        await fetch('/api/post-bookmarked-71h8jrp0l6/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        setIsBookmarked(!isBookmarked)
      } catch (error) {
        console.error(error);
      }
    } else {
      setAlertSignin(true)
    }
  }
  return (
    <>
      <BookmarkStyle className={ isBookmarked ? "is-bookmarked" : "" } { ...props } onClick={ onClickButton }>
        <div className="bookmark-container">
          <BookmarkIcon />
        </div>
      </BookmarkStyle>
      { alertSignin && <SigninBanner onClickButtonClose={ setAlertSignin } /> }
    </>
  )
}