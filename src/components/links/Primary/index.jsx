// Styles
import { PrimaryStyle } from "./index.style"
// Next
import Link from "next/link"

export default function Primary({ color = "green", href, children, ...props }) {
  return (
    <Link href={ href }>
      <PrimaryStyle color={ color } { ...props }>
        { children }
      </PrimaryStyle>
    </Link>
  )
}