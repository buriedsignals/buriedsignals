// Styles
import { NewsletterStyle } from "./index.style"
// Next
import Link from "next/link"
// Links
import ThirstyLink from "@/components/links/Thirsty"
// Icons
import LogoIcon from "@/components/icons/Logo"

export default function Newsletter({ ...props }) {
  return (
    <NewsletterStyle { ...props }>
      <div className="container-module-large newsletter-container">
        <Link href="/">
          <a className="logo">
            <LogoIcon />
          </a>
        </Link>
        <p className="typography-09 details">The monthly newsletter for visual journalism resources, insights and inspiration.</p>
        {/* <input className="typography-03" type="email" name="email" placeholder="Your e-mail here" /> */}
        <ThirstyLink color="black02" colorHover="white" href="https://buriedsignals.substack.com/" target="_blank" rel="noopener noreferrer">{ "I'm interested" }</ThirstyLink>
      </div>
    </NewsletterStyle>
  )
}