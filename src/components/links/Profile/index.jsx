// Styles
import { ProfileStyle } from "./index.style"
// Next
import Link from "next/link"
// Hooks
import useStore from "@/hooks/useStore"

export default function Profile({ imgURL, ...props }) {
  // Hooks
  const [user] = useStore((state) => [state.user])
  return (
    <Link href={ `/profiles/${ user.connected ? user.slug : 'signin' }` }>
      <ProfileStyle { ...props }>
        <img src={ imgURL } alt="Profile user image" />
      </ProfileStyle>
    </Link>
  )
}