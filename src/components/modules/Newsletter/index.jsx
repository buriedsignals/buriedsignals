// Styles
import { NewsletterStyle } from "./index.style"
// Next
import Link from "next/link"
// Links
import ThirstyLink from "@/components/links/Thirsty"
// Icons
import BuriedSignalsIcon from "@/components/icons/BuriedSignals"

export default function Newsletter({ ...props }) {
  return (
    <NewsletterStyle { ...props }>
      <div className="container-module-large newsletter-container">
        <div className="logo">
          <BuriedSignalsIcon />
        </div>
        <p className="typography-09 details">The monthly newsletter for visual journalism resources, insights and inspiration.</p>
        <ThirstyLink color="black02" colorHover="white" href="https://buriedsignals.substack.com/" target="_blank" rel="noopener noreferrer">{ "Subscribe" }</ThirstyLink>
      </div>
    </NewsletterStyle>
  )
}