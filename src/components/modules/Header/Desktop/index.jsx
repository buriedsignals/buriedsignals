// Styles
import { HeaderDesktopStyle } from "./index.style"
// React
import { useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Links
import PrimaryLink from "@/components/links/Primary"
import SupportButton from "@/components/links/Support"
// Icons
import LogoIcon from "@/components/icons/Logo"
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import YoutubeIcon from "@/components/icons/Youtube"
import SupportIcon from "@/components/icons/Support"

export default function HeaderDesktop() {
  // Router
  const router = useRouter()
  const [dropdown, setDropdown] = useState(false)
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
                <a className={ `${ router.pathname == "/" || router.pathname == "/insights" || router.pathname == "/resources" ? "is-active" : "" } ${ dropdown ? "is-hover" : "" }` }  onMouseEnter={ () => setDropdown(true) }>
                  <p className="typography-01">Blog</p>
                </a>
              </Link>
            </li>
            <li className="page">
              <a href="https://www.youtube.com/@_tomvaillant" target="_blank" rel="noopener noreferrer" onMouseEnter={ () => setDropdown(false) }>
                <p className="typography-01">Video Channel</p>
              </a>
            </li>
            <li className="page">
              <a href="https://tomvaillant.substack.com" target="_blank" rel="noopener noreferrer" onMouseEnter={ () => setDropdown(false) }>
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
            <div className="action socials">            
              <a href="https://twitter.com/_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
              <a href="https://www.youtube.com/@_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
              <a href="https://www.instagram.com/_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/in/tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            </div>
          </ul>
        </div>
      </div>
      { router.pathname == "/" || router.pathname == "/insights" || router.pathname == "/resources" ?  
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
          </div>
        </div>
        :
        <></>
      }
    </HeaderDesktopStyle>
  )
}