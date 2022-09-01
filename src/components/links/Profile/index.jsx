// Styles
import { ProfileStyle } from "./index.style"
// Next
import Link from "next/link"

export default function Profile({ imgURL, ...props }) {
  // Handlers
  return (
    <Link href="/profile">
      <ProfileStyle { ...props }>
        <img src={ imgURL } alt="Profile user image" />
      </ProfileStyle>
    </Link>
  )
}