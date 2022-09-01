// Styles
import { LikeStyle } from "./index.style"
// Icons
import LikeIcon from "@/components/icons/Like"

export default function Like({ likes, liked = false, ...props }) {
  // Handlers
  const onClickButton = () => {}
  return (
    <LikeStyle className={ liked ? "is-liked" : "" } { ...props } onClick={ onClickButton }>
      <div className="like-container">
        <LikeIcon />
        { likes != 0 && <p className="typography-03">{ likes }</p> }
      </div>
    </LikeStyle>
  )
}