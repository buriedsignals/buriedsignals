// Styles
import { InformationStyle } from "./index.style"

export default function Information({ ...props }) {
  return (
    <InformationStyle { ...props } width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0.5C3.41602 0.5 0.5 3.41602 0.5 7C0.5 10.584 3.41602 13.5 7 13.5C10.584 13.5 13.5 10.584 13.5 7C13.5 3.41602 10.584 0.5 7 0.5ZM7 1.5C10.043 1.5 12.5 3.95703 12.5 7C12.5 10.043 10.043 12.5 7 12.5C3.95703 12.5 1.5 10.043 1.5 7C1.5 3.95703 3.95703 1.5 7 1.5ZM6.5 4V5H7.5V4H6.5ZM6.5 6V10H7.5V6H6.5Z"/>
    </InformationStyle>
  )
}