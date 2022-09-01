// Styles
import { CommentStyle } from "./index.style"
// Icons
import CommentIcon from "@/components/icons/Comment"

export default function Comment({ comments, commented = false, ...props }) {
  // Handlers
  const onClickButton = () => {}
  return (
    <CommentStyle className={ commented ? "is-Commentd" : "" } { ...props } onClick={ onClickButton }>
      <div className="comment-container">
        <CommentIcon />
        { comments != 0 && <p className="typography-03">{ comments }</p> }
      </div>
    </CommentStyle>
  )
}