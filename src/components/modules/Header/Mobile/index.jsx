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
import TwitterIcon from "@/components/icons/Twitter"
import SlackIcon from "@/components/icons/Slack"
import SponsorButton from "@/components/links/Sponsor"

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
              <a href="https://t1ipnnn9dzv.typeform.com/to/YrFFaQjA" target="_blank" rel="noreferrer">
                <p className="typography-01">Submit a project</p>
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
            <div className="header-panel-container">
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
                        <Link href="/about/publication">
                          <a className={ router.pathname == "/about/publication" ? "is-active" : "" } onClick={ () => { setModalDropdown(); setModalMenu(); } }>
                            <p className="typography-01">Publication</p>
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
                      <li className="link">
                        <a href="https://nuanced.studio" target="_blank" rel="noopener noreferrer">
                          <p className="typography-01">Studio</p>
                        </a>
                      </li>
                    </ul>
                  }
                </li>
                <li className="page socials-container">
                  <a href="https://t1ipnnn9dzv.typeform.com/to/khhK4BJ2" target="_blank" rel="noreferrer">
                    <SlackIcon />
                  </a>
                  <a href="https://twitter.com/buriedsignals" target="_blank" rel="noreferrer">
                    <TwitterIcon size="small" />
                  </a>
                </li>
              </ul>
              {/* <SponsorButton href="https://www.google.fr" text="WebRecorder" icon={ () => <SlackIcon /> } /> */}
            </div>
          </div>
      }
      </div>
    </HeaderMobileStyle>
  )
}