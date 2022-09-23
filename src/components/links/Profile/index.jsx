// Styles
import { ProfileStyle } from "./index.style"
// Scripts
import { getUserCookies } from "@/scripts/utils"
// Next
import Link from "next/link"

export default function Profile({ imgURL, ...props }) {
  // Cookies
  const user = getUserCookies()
  return (
    <Link href={ `/profiles/${ user.connected ? user.slug : 'signin' }` }>
      <ProfileStyle { ...props }>
        <img src={ imgURL } alt="Profile user image" />
      </ProfileStyle>
    </Link>
  )
}