// Styles
import { ExternalLinkStyle } from "./index.style"

export default function ExternalLink({ ...props }) {
  return (
    <ExternalLinkStyle { ...props } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.66667V12.6667C12 13.403 11.403 14 10.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V5.33333C2 4.59695 2.59695 4 3.33333 4H7.33333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2H14V6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66699 9.33333L14.0003 2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </ExternalLinkStyle>
  )
}