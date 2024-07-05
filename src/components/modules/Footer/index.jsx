// Styles
import { FooterStyle } from "./index.style"
// React
import { useEffect, useState } from "react"
// Next
import Link from "next/link"
// Icons
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import Logo from "@/components/icons/Logo"
import YoutubeIcon from "@/components/icons/Youtube"

export default function Footer() {
  // States
  const [show, setShow] = useState(false)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500);
  }, [])
  return (
    <FooterStyle className={ `footer ${ show ? "is-show" : "" }` }>
      <div className="footer-container">
        <div className="links">
          <div className="socials">            
            <a href="https://twitter.com/_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://www.youtube.com/@_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
            <a href="https://www.instagram.com/_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          </div>
          <div className="buried">
            <Link href="/"><a className="typography-01">Blog</a></Link>
            <a href="https://studio.tomvaillant.com" className="typography-01" target="_blank" rel="noopener noreferrer">Studio</a>
            <Link href="/about"><a className="typography-01">About</a></Link>
          </div>
        </div>
        <div className="infos">
          <div className="legal">
            <p className="typography-10">Zurich, Switzerland</p>
            <a href="mailto:tom@buriedsignals.com" className="typography-10" target="_blank" rel="noopener noreferrer">tom@buriedsignals.com</a>
            <p className="copyright typography-10">© 2023 Buried Signals. See <Link href="/privacy"><a className="typography-03">Privacy</a></Link>, <Link href="/terms"><a className="typography-03">Terms</a></Link> and <Link href="/notice"><a className="typography-03">Information Collection Notice</a></Link></p>
          </div>
          <Link href="/"><a className="logo" target="_blank" rel="noopener noreferrer"><Logo type="large" /></a></Link>
        </div>
      </div>
    </FooterStyle>
  )
}