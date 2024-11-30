// Styles
import { HeaderMobileStyle } from "./index.style"
// React
import { useEffect } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Links
import SupportButton from "@/components/links/Support"
// Icons
import LogoIcon from "@/components/icons/Logo"
import BurgerIcon from "@/components/icons/Burger"
import CrossIcon from "@/components/icons/Cross"
import ArrowIcon from "@/components/icons/Arrow"
import SupportIcon from "@/components/icons/Support"
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import YoutubeIcon from "@/components/icons/Youtube"

export default function HeaderMobile() {
  // Router
  const router = useRouter()
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
            {/* <li className="action">
              <a href="https://t1ipnnn9dzv.typeform.com/to/YrFFaQjA" target="_blank" rel="noreferrer">
                <p className="typography-01">Submit</p>
              </a>
            </li> */}
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
                    <p className="typography-01">Blog</p>                  
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
                  <a href="https://www.youtube.com/@_tomvaillant">
                    <p className="typography-01">Video Channel</p>
                  </a>
                </li>
                <li className="page">
                  <a href="https://tomvaillant.substack.com">
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
              <div className="socials">            
                <a href="https://twitter.com/_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                <a href="https://www.youtube.com/@_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
                <a href="https://www.instagram.com/_tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                <a href="https://www.linkedin.com/in/tomvaillant" className="network" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
              </div>
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