// Styles
import { BookmarkStyle } from "./index.style"
// Icons
import BookmarkIcon from "@/components/icons/Bookmark"

export default function Bookmark({ bookmarkd = false, ...props }) {
  // Handlers
  const onClickButton = () => {}
  return (
    <BookmarkStyle className={ bookmarkd ? "is-bookmarked" : "" } { ...props } onClick={ onClickButton }>
      <div className="bookmark-container">
        <BookmarkIcon />
      </div>
    </BookmarkStyle>
  )
}