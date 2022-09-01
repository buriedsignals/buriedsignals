// Styles
import { CommentStyle } from "./index.style"

export default function Comment({ ...props }) {
  return (
    <CommentStyle { ...props } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 10.7364 2.59695 11.3333 3.33333 11.3333H11.3333L14 14V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V10Z" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </CommentStyle>
  )
}