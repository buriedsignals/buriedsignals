// Styles
import { BookmarkStyle } from "./index.style"
// Scripts
import { getUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Nodes
import { setCookie } from "cookies-next"
// Banners
import SigninBanner from "@/components/banners/Signin"
// Icons
import BookmarkIcon from "@/components/icons/Bookmark"

export default function Bookmark({ bookmarked = false, postId, type, ...props }) {
  // Cookies
  const user = getUserCookies()
  // States
  const [alertSignin, setAlertSignin] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  useEffect(() => {
    setIsBookmarked(user.bookmarked[type].some(post => post.id === postId))
  }, [])
  // Handlers
  const onClickButton = async (e) => {
    e.preventDefault()
    if (user.connected) {
      try {
        let bookmarkedPost = user.bookmarked[type]
        if (bookmarkedPost.some(post => post.id === postId)) {
          bookmarkedPost = bookmarkedPost.filter(post => post.id !== postId)
        } else {
          bookmarkedPost.push({ id: postId })
        }
        const body = { userId: user.id, userPostIdsBookmarked: bookmarkedPost.map(post => post.id) };
        await fetch(`/api/post-update-${ type }-bookmarked-71h8jrp0l6/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        setIsBookmarked(!isBookmarked)
        user.bookmarked[type] = bookmarkedPost
        setCookie("bookmarked", user.bookmarked)
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