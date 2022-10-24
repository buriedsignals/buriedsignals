// Styles
import { PrimaryStyle } from "./index.style"
// Next
import Link from "next/link"

export default function Primary({ color = "green", href, children, intern = true, ...props }) {
  return (
    <>
      { intern ?
        <Link href={ href }>
          <PrimaryStyle color={ color } { ...props }>
            { children }
          </PrimaryStyle>
        </Link>
        :
        <PrimaryStyle href={ href } target="_blank" rel="noreferrer" { ...props } color={ color }>
          { children }
        </PrimaryStyle> 
      }
    </>
  )
}