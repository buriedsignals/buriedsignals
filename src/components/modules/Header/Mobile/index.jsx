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
import SponsorButton from "@/components/links/Sponsor"
// import ProfileLink from "@/components/links/Profile"
// Icons
import LogoIcon from "@/components/icons/Logo"
import BurgerIcon from "@/components/icons/Burger"
import CrossIcon from "@/components/icons/Cross"
import ArrowIcon from "@/components/icons/Arrow"
import TwitterIcon from "@/components/icons/Twitter"
import SlackIcon from "@/components/icons/Slack"
import WebrecorderIcon from "@/components/icons/Webrecorder"
import SponsorIcon from "@/components/icons/Sponsor"

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
  useEffect(() => {
    setModalDropdown(false)
    setModalMenu(false)
  }, [router.asPath])
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
                <p className="typography-01">Submit</p>
              </a>
            </li>
            {  user.connected ?
                <li className="action">
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
                  <button className={ `modal${ modalDropdown ? ' is-open' : '' } ${ router.pathname == "/" || router.pathname == "/insights" || router.pathname == "/resources" ? "is-active" : "" }` } onClick={ setModalDropdown }>
                    <p className="typography-01">Magazine</p>                  
                    <ArrowIcon />
                  </button>
                  { modalDropdown && 
                    <ul className="links">
                      <li className="link">
                        <Link href="/">
                          <a className={ router.pathname == "/" ? "is-active" : "" }>
                            <p className="typography-01">Inspiration</p>
                          </a>
                        </Link>
                      </li>
                      <li className="link">
                        <Link href="/insights">
                          <a className={ router.pathname == "/insights" ? "is-active" : "" }>
                            <p className="typography-01">Insights</p>
                          </a>
                        </Link>
                      </li>
                      <li className="link">
                        <Link href="/resources">
                          <a className={ router.pathname == "/resources" ? "is-active" : "" }>
                            <p className="typography-01">Resources</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  }
                </li>
                <li className="page">
                  <Link href="/investigations">
                    <a className={ router.pathname == "/investigations" ? "is-active" : "" } onMouseEnter={ () => setDropdown(false) }>
                      <p className="typography-01">Investigations</p>
                    </a>
                  </Link>
                </li>
                <li className="page">
                  <a href="https://www.studio.buriedsignals.com">
                    <p className="typography-01">Studio</p>
                  </a>
                </li>
                <li className="page">
                  <Link href="/experts">
                    <a className={ router.pathname == "/experts" ? "is-active" : "" }>
                      <p className="typography-01">Experts</p>
                    </a>
                  </Link>
                </li>
                <li className="page">
                  <a href="https://buriedsignals.substack.com" target="_blank" rel="noopener noreferrer" onMouseEnter={ () => setDropdown(false) }>
                    <p className="typography-01">Newsletter</p>
                  </a>
                </li>
                <li className="page">
                  <Link href="/about">
                    <a className={ router.pathname == "/about" ? "is-active" : "" }>
                      <p className="typography-01">About</p>
                    </a>
                  </Link>
                </li>
              </ul>
              <SponsorButton href="https://informationplusconference.com/" title="Sponsor" text="Information+ Conference" icon={ () => <SponsorIcon /> } />
            </div>
          </div>
      }
      </div>
      { router.pathname == "/" || router.pathname == "/insights" || router.pathname == "/resources" ?  
        <div className="subheader">
          <div className="subheader-mobile-container">
            <Link href="/">
              <a className={ router.pathname == "/" ? "is-active" : "" }>
                <p className="typography-01">Inspiration</p>
              </a>
            </Link>
            <Link href="/insights">
              <a className={ router.pathname == "/insights" ? "is-active" : "" }>
                <p className="typography-01">Insights</p>
              </a>
            </Link>
            <Link href="/resources">
              <a className={ router.pathname == "/resources" ? "is-active" : "" }>
                <p className="typography-01">Resources</p>
              </a>
            </Link>
          </div>
        </div>
        :
        <></>
      }
    </HeaderMobileStyle>
  )
}