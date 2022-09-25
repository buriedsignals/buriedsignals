// Styles
import { HeaderMobileStyle } from "./index.style"
// Scripts
import { getUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Links
// import ProfileLink from "@/components/links/Profile"
// Icons
import LogoIcon from "@/components/icons/Logo"
import BurgerIcon from "@/components/icons/Burger"
import CrossIcon from "@/components/icons/Cross"
import ArrowIcon from "@/components/icons/Arrow"

export default function HeaderMobile() {
  // Router
  const router = useRouter()
  // Cookies
  const [user, setUser] = useState({ connected: false, slug: '' })
  useEffect(() => {
    setUser(getUserCookies())
  }, [])
  // Hooks
  const [modalMenu, setModalMenu] = useToggle(false) 
  const [modalDropdown, setModalDropdown] = useToggle(false) 
  // Effects
  useEffect(() => {
    useStore.setState({ scroll: !modalMenu })
  }, [modalMenu])
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
            <li className="action">
              <a href="https://google.fr">
                <p className="typography-01">Submit</p>
              </a>
            </li>
            {  user.connected ?
                <li className="action">
                  {/* <ProfileLink imgURL="/images/img-profil.jpg" /> */}
                  <Link href={ `/profiles/${ user.slug }` }>
                    <a className={ router.asPath == `/profiles/${ user.slug }` ? "is-active" : "" } onClick={ () => setModalMenu(false) }>
                      <p className="typography-01">Profile</p>
                    </a>
                  </Link>
                </li>
              :
                <li className="action">
                  <Link href="/profiles/signin">
                    <a className={ router.pathname == "/profiles/signin" ? "is-active" : "" } onClick={ () => setModalMenu(false) }>
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
                  <a className={ router.pathname == "/" ? "is-active" : "" } onClick={ setModalMenu }>
                    <p className="typography-01">Visuals</p>
                  </a>
                </Link>
              </li>
              <li className="page">
                <Link href="/insights">
                  <a className={ router.pathname == "/insights" ? "is-active" : "" } onClick={ setModalMenu }>
                    <p className="typography-01">Insights</p>
                  </a>
                </Link>
              </li>
              <li className="page">
                <Link href="/resources">
                  <a className={ router.pathname == "/resources" ? "is-active" : "" } onClick={ setModalMenu }>
                    <p className="typography-01">Resources</p>
                  </a>
                </Link>
              </li>
              <li className="page">
                <button className={ `modal${ modalDropdown ? ' is-open' : '' } ${ router.pathname.includes("/about") ? "is-active" : "" }` } onClick={ setModalDropdown }>
                  <p className="typography-01">About</p>                  
                  <ArrowIcon />
                </button>
                { modalDropdown && 
                  <ul className="links">
                    <li className="link">
                      <Link href="/about/about-us">
                        <a className={ router.pathname == "/about/about-u" ? "is-active" : "" } onClick={ () => { setModalDropdown(); setModalMenu(); } }>
                          <p className="typography-01">About us</p>
                        </a>
                      </Link>
                    </li>
                    <li className="link">
                      <Link href="/about/studio">
                        <a className={ router.pathname == "/about/studio" ? "is-active" : "" } onClick={ () => { setModalDropdown(); setModalMenu(); } }>
                          <p className="typography-01">Studio</p>
                        </a>
                      </Link>
                    </li>
                    <li className="link">
                      <Link href="/about/jury">
                        <a className={ router.pathname == "/about/jury" ? "is-active" : "" } onClick={ () => { setModalDropdown(); setModalMenu(); } }>
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