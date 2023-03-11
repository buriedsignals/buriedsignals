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

export default function HeaderDesktop() {
  // Router
  const router = useRouter()
  // Cookies
  const [user, setUser] = useState({ connected: false, slug: '' })
  useEffect(() => {
    setUser(getUserCookies())
  }, [])
  return (
    <HeaderDesktopStyle>
      <div className="header-desktop-container">
        <div className="left-container">
          <Link href="/">
            <a className="logo">
              <LogoIcon type="small" />
            </a>
          </Link>
          <ul className="pages">
            <li className="page">
              <Link href="/">
                <a className={ router.pathname == "/" ? "is-active" : "" }>
                  <p className="typography-01">Visuals</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <Link href="/insights">
                <a className={ router.pathname == "/insights" ? "is-active" : "" }>
                  <p className="typography-01">Insights</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <Link href="/resources">
                <a className={ router.pathname == "/resources" ? "is-active" : "" }>
                  <p className="typography-01">Resources</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <DropdownModule 
                buttonName="About"
                isActive={ router.pathname.includes("/about") ? "is-active" : "" }
                listActions={ (() => {
                  return [
                    (() => <Link href="/about/publication">
                      <a className={ router.pathname == "/about/publication" ? "is-active" : "" }>
                        <p className="typography-01">Publication</p>
                      </a>
                    </Link>)(),
                    (() => <Link href="/about/jury">
                      <a className={ router.pathname == "/about/jury" ? "is-active" : "" }>
                        <p className="typography-01">Jury</p>
                      </a>
                    </Link>)(),
                    (() => <a className={ router.pathname == "/about/studio" ? "is-active" : "" } href="https://nuanced.studio" target="_blank" rel="noopener noreferrer">
                      <p className="typography-01">Studio</p>
                    </a>)(),
                  ]
                })() }
              />
            </li>
          </ul>
        </div>
        <div className="right-container">
          <ul className="actions">
            <li className="action">
              <SponsorButton href="https://www.webrecorder.net" text="WebRecorder" icon={ () => <WebrecorderIcon /> } />
            </li>
            <li className="action">
              <a href="https://t1ipnnn9dzv.typeform.com/to/khhK4BJ2" target="_blank" rel="noreferrer">
                <SlackIcon />
              </a>
            </li>
            <li className="action">
              <a href="https://twitter.com/buriedsignals" target="_blank" rel="noreferrer">
                <TwitterIcon size="small" />
              </a>
            </li>
            { user.connected ?
                <li className="action">
                  {/* <ProfileLink imgURL="/images/img-profil.jpg" /> */}
                  <Link href={ `/profiles/${ user.connected ? user.slug : 'signin' }` }>
                    <a>
                      <p className="typography-01">Profile</p>
                    </a>
                  </Link>
                </li>
              :
              <>
                <li className="action">
                  <Link href="/profiles/signin">
                    <a>
                      <p className="typography-01">Sign In</p>
                    </a>
                  </Link>
                </li>
                {/* <li className="action">
                  <Link href="/profiles/signup">
                    <a>
                      <p className="typography-01">Sign Up</p>
                    </a>
                  </Link>
                </li> */}
              </>
            }
            <li className="action">
              <PrimaryLink href="https://t1ipnnn9dzv.typeform.com/to/YrFFaQjA" intern={ false }>
                <p className="typography-03">{ useBreakpoint(down('xl')) ? "Submit" : "Submit a project" }</p>
              </PrimaryLink>
            </li>
          </ul>
        </div>
      </div>
    </HeaderDesktopStyle>
  )
}