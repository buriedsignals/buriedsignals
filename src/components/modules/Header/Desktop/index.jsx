// Styles
import { HeaderDesktopStyle } from "./index.style"
// Next
import Link from "next/link"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import DropdownModule from "@/components/modals/Dropdown"
// Links
import PrimaryLink from "@/components/links/Primary"
import ProfileLink from "@/components/links/Profile"
// Icons
import LogoIcon from "@/components/icons/Logo"

export default function HeaderDesktop() {
  // Hooks
  const [connected] = useStore((state) => [state.connected])
  return (
    <HeaderDesktopStyle>
      <div className="header-desktop-container">
        <div className="left-container">
          <Link href="/">
            <a className="logo">
              <LogoIcon type="long" />
            </a>
          </Link>
          <ul className="pages">
            <li className="page">
              <Link href="/">
                <a>
                  <p className="typography-01">Visuals</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <Link href="/insights">
                <a>
                  <p className="typography-01">Insights</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <Link href="/resources">
                <a>
                  <p className="typography-01">Resources</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <DropdownModule 
                buttonName="About"
                listActions={ (() => {
                  return [
                    (() => <Link href="/about/about-us">
                      <a>
                        <p className="typography-01">About us</p>
                      </a>
                    </Link>)(),
                    (() => <Link href="/about/studio">
                      <a>
                        <p className="typography-01">Studio</p>
                      </a>
                    </Link>)(),
                    (() => <Link href="/about/jury">
                      <a>
                        <p className="typography-01">Jury</p>
                      </a>
                    </Link>)(),
                  ]
                })() }
              />
            </li>
          </ul>
        </div>
        <div className="right-container">
          <ul className="actions">
            <li className="action">
              <a href="https://google.fr">
                <p className="typography-01">Submit</p>
              </a>
            </li>
            { connected ?
                <li className="action">
                  {/* <ProfileLink imgURL="/images/img-profil.jpg" /> */}
                  <Link href="/profile">
                    <a>
                      <p className="typography-01">Profile</p>
                    </a>
                  </Link>
                </li>
              :
              <>
                <li className="action">
                  <Link href="/profile/signin">
                    <a>
                      <p className="typography-01">Sign In</p>
                    </a>
                  </Link>
                </li>
                <li className="action">
                  <PrimaryLink href="/profile/signup">
                    <p className="typography-03">Sign Up</p>
                  </PrimaryLink>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </HeaderDesktopStyle>
  )
}