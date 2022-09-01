// Styles
import { BookmarkStyle } from "./index.style"

export default function Bookmark({ ...props }) {
  return (
    <BookmarkStyle { ...props } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6673 14L8.00065 10.6667L3.33398 14V3.33333C3.33398 2.59695 3.93094 2 4.66732 2H11.334C12.0704 2 12.6673 2.59695 12.6673 3.33333V14Z" strokeWidth="1.46667" strokeLinecap="round" strokeLinejoin="round"/>
    </BookmarkStyle>
  )
}