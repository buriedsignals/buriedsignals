// Styles
import { FooterStyle } from "./index.style"
// React
import { useEffect, useState } from "react"
// Next
import Link from "next/link"
// Icons
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import DiscordIcon from "@/components/icons/Discord"
import MailIcon from "@/components/icons/Mail"
import Logo from "@/components/icons/Logo"

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
        <ul className="socials">
          {/* <li className="social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </li>
          <li className="social">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </li>
          <li className="social">
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <DiscordIcon />
            </a>
          </li>
          <li className="social">
            <a href="mailto:contact@buriedsignals.com" target="_blank" rel="noreferrer">
              <MailIcon />
            </a>
          </li> */}
        </ul>
        <Link href="/">
          <a className="logo">
            <Logo type="large" />
          </a>
        </Link>
        <p className="copyright typography-10">© 2021 Buried Signals. See <Link href="/privacy"><a className="typography-03">Privacy Terms</a></Link> and <Link href="/notice"><a className="typography-03">Legal Notice</a></Link></p>
      </div>
    </FooterStyle>
  )
}