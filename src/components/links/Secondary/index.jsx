// Styles
import { SecondaryStyle } from "./index.style"
// Next
import Link from "next/link"

export default function Secondary({ href, children, intern = false, ...props }) {
  return (
    <>
      { intern ?
        <Link href={ href }>
          <SecondaryStyle { ...props }>
            <div className="secondary-container">
              { children }
            </div>
          </SecondaryStyle>
        </Link>
        :
        <SecondaryStyle href={ href } target="_blank" rel="noreferrer" { ...props }>
          <div className="secondary-container">
            { children }
          </div>
      </SecondaryStyle> 
      }
    </>
  )
}