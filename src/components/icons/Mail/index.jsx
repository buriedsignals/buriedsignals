// Styles
import { MailStyle } from "./index.style"

export default function Mail({ size = null, ...props }) {
  return (
    <MailStyle className={ size == "small" ? "small" : "" } { ...props } width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.78986L9.36702 13.6001L1 20.9223V5.78986ZM27 23.2003H1V22.4681L10.1968 14.4137L13.6543 17.668C13.7234 17.7493 13.8617 17.8307 14 17.8307C14.1383 17.8307 14.2074 17.7493 14.3457 17.668L17.8032 14.4137L27 22.4681V23.2003ZM27 20.9223L18.633 13.6001L27 5.78986V20.9223ZM27 4.24407L14 16.3663L1 4.24407V4H27V4.24407Z"/>
    </MailStyle>
  )
}