// Styles
import { HeaderMobileStyle } from "./index.style"
// Next
import Link from "next/link"
// Hooks
import useStore from "@/hooks/useStore"
import useToggle from "@/hooks/useToggle"
// Links
import ProfileLink from "@/components/links/Profile"
// Icons
import LogoIcon from "@/components/icons/Logo"
import BurgerIcon from "@/components/icons/Burger"
import CrossIcon from "@/components/icons/Cross"
import ArrowIcon from "@/components/icons/Arrow"

export default function HeaderMobile() {
  // Hooks
  const [connected] = useStore((state) => [state.connected])
  const [modalMenu, setModalMenu] = useToggle(false) 
  const [modalDropdown, setModalDropdown] = useToggle(false) 
  return (
    <HeaderMobileStyle>
      <div className="header-mobile-container">
        <div className="top-container">
          <Link href="/">
            <a className="logo">
              <LogoIcon />
            </a>
          </Link>
          <ul className="actions">
            {  connected ?
                <li className="action">
                  {/* <ProfileLink imgURL="/images/img-profil.jpg" /> */}
                  <Link href="/profile">
                    <a>
                      <p className="typography-01">Profile</p>
                    </a>
                  </Link>
                </li>
              :
                <li className="action">
                  <Link href="/profile/signin">
                    <a onClick={ setModalMenu }>
                      <p className="typography-01">Sign In</p>
                    </a>
                  </Link>
                </li>       
            }
            <li className="action">
              <button onClick={ setModalMenu }>
                { modalMenu ?
                  <CrossIcon />
                  :
                  <BurgerIcon />
                }
              </button>
            </li>
          </ul>
        </div>
        { modalMenu && 
          <div className="header-panel">
            <ul className="pages">
              <li className="page">
                <Link href="/">
                  <a onClick={ setModalMenu }>
                    <p className="typography-01">Visuals</p>
                  </a>
                </Link>
              </li>
              <li className="page">
                <Link href="/insights">
                  <a onClick={ setModalMenu }>
                    <p className="typography-01">Insights</p>
                  </a>
                </Link>
              </li>
              <li className="page">
                <Link href="/resources">
                  <a onClick={ setModalMenu }>
                    <p className="typography-01">Resources</p>
                  </a>
                </Link>
              </li>
              <li className="page">
                <button className={ `modal${ modalDropdown ? ' is-open' : '' }` } onClick={ setModalDropdown }>
                  <ArrowIcon />
                  <p className="typography-01">About</p>
                </button>
                { modalDropdown && 
                  <ul className="links">
                    <li className="link">
                      <Link href="/about/about-us">
                        <a onClick={ () => { setModalDropdown(); setModalMenu(); } }>
                          <p className="typography-01">About us</p>
                        </a>
                      </Link>
                    </li>
                    <li className="link">
                      <Link href="/about/studio">
                        <a onClick={ () => { setModalDropdown(); setModalMenu(); } }>
                          <p className="typography-01">Studio</p>
                        </a>
                      </Link>
                    </li>
                    <li className="link">
                      <Link href="/about/jury">
                        <a onClick={ () => { setModalDropdown(); setModalMenu(); } }>
                          <p className="typography-01">Jury</p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                }
              </li>
            </ul>
          </div>
      }
      </div>
    </HeaderMobileStyle>
  )
}