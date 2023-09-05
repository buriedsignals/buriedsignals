// Styles
import { HeaderDesktopStyle } from "./index.style"
// Scripts
import { getUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import DropdownModule from "@/components/modals/Dropdown"
// Links
import PrimaryLink from "@/components/links/Primary"
import SponsorButton from "@/components/links/Sponsor"
// import ProfileLink from "@/components/links/Profile"
// Icons
import LogoIcon from "@/components/icons/Logo"
import TwitterIcon from "@/components/icons/Twitter"
import SlackIcon from "@/components/icons/Slack"
import WebrecorderIcon from "@/components/icons/Webrecorder"
import SponsorIcon from "@/components/icons/Sponsor"

export default function HeaderDesktop() {
  // Router
  const router = useRouter()
  // Cookies
  const [user, setUser] = useState({ connected: false, slug: '' })
  const [dropdown, setDropdown] = useState(false)
  useEffect(() => {
    setUser(getUserCookies())
  }, [])
  return (
    <HeaderDesktopStyle  onMouseLeave={ () => setDropdown(false) }>
      <div className="header-desktop-container">
        <div className="left-container">
          <Link href="/">
            <a className="logo" onMouseEnter={ () => setDropdown(false) }>
              <LogoIcon type="small" />
            </a>
          </Link>
          <ul className="pages">
            <li className="page">
              <Link href="/">
                <a className={ `${ router.pathname == "/" || router.pathname == "/insights" || router.pathname == "/resources" || router.pathname == "/directory" ? "is-active" : "" } ${ dropdown ? "is-hover" : "" }` }  onMouseEnter={ () => setDropdown(true) }>
                  <p className="typography-01">Magazine</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <a href="https://www.studio.buriedsignals.com" target="_blank" rel="noopener noreferrer" onMouseEnter={ () => setDropdown(false) }>
                <p className="typography-01">Studio</p>
              </a>
            </li>
            <li className="page">
              <Link href="/membership">
                <a className={ router.pathname == "/membership" ? "is-active" : "" } onMouseEnter={ () => setDropdown(false) }>
                  <p className="typography-01">Membership</p>
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
                <a className={ router.pathname == "/about" ? "is-active" : "" } onMouseEnter={ () => setDropdown(false) }>
                  <p className="typography-01">About</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <ul className="actions">
            <li className="action" onMouseEnter={ () => setDropdown(false) }>
              <SponsorButton href="https://informationplusconference.com/" title="Sponsor" text="Information+ Conference" icon={ () => <SponsorIcon /> } />
            </li>
            { user.connected ?
                <li className="action">
                  <Link href={ `/profiles/${ user.connected ? user.slug : 'signin' }` }>
                    <a onMouseEnter={ () => setDropdown(false) }>
                      <p className="typography-01">Profile</p>
                    </a>
                  </Link>
                </li>
              :
              <>
                <li className="action">
                  <Link href="/profiles/signin">
                    <a onMouseEnter={ () => setDropdown(false) }>
                      <p className="typography-01">Sign In</p>
                    </a>
                  </Link>
                </li>
              </>
            }
            <li className="action" onMouseEnter={ () => setDropdown(false) }>
              <PrimaryLink href="https://t1ipnnn9dzv.typeform.com/to/YrFFaQjA" intern={ false }>
                <p className="typography-03">{ useBreakpoint(down('xl')) ? "Submit" : "Submit a project" }</p>
              </PrimaryLink>
            </li>
          </ul>
        </div>
      </div>
      { router.pathname == "/" || router.pathname == "/insights" || router.pathname == "/resources" || router.pathname == "/directory" ?  
        <div className="subheader">
          <div className="subheader-desktop-container">
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
            <Link href="/directory">
              <a className={ router.pathname == "/directory" ? "is-active" : "" }>
                <p className="typography-01">Directory</p>
              </a>
            </Link>
          </div>
        </div>
        :
        <></>
      }
    </HeaderDesktopStyle>
  )
}