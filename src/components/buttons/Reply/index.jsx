// Styles
import { ReplyStyle } from "./index.style"
// Icons
import ReplyIcon from "@/components/icons/Reply"

export default function Reply({ onClickButton, ...props }) {
  return (
    <>
      <ReplyStyle onClick={ onClickButton } { ...props }>
        <div className="reply-container">
            <ReplyIcon />
            <p className="typography-11">Reply</p>
        </div>
      </ReplyStyle>
    </>
  )
}