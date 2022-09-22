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

export default function Bookmark({ bookmarked = false, postId, type, ...props }) {  
  // Hooks
  const [user] = useStore((state) => [state.user])
  console.log(postId)
  // States
  const [alertSignin, setAlertSignin] = useState(!user.connected)
  const [isBookmarked, setIsBookmarked] = useState(user.bookmarked[type].some(post => post.id === postId))
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
        const bookmarkedStore = user.bookmarked
        bookmarkedStore[type] = bookmarkedPost
        useStore.setState({ bookmarked: bookmarkedStore })
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