// Styles
import { TalentStyle } from "./index.style"
// React
import { useState } from "react"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Icons
import MailIcon from "@/components/icons/Mail"
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import BehanceIcon from "@/components/icons/Behance"
import PortfolioIcon from "@/components/icons/Portfolio"

export default function Talents({ talents, ...props }) {
  // States
  const [selected, setSelected] = useState(null)
  // Hooks
  const breakpoint = useBreakpoint(down('talents'))
  // Handlers
  const onClickTalent = (index) => {
    if (selected == index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const onScrollExpertises = (e) => {
    const scrollPos = e.currentTarget.scrollLeft
    const currentTargetWidth = e.currentTarget.scrollWidth
    const currentParent = e.currentTarget.parentNode
    const currentParentWidth = currentParent.offsetWidth
    if (scrollPos > 0) {
      currentParent.classList.add('is-before')
    } else {
      currentParent.classList.remove('is-before')
    }
    if (Math.ceil(scrollPos + currentParentWidth) < currentTargetWidth) {
      currentParent.classList.add('is-after')
    } else {
      currentParent.classList.remove('is-after')
    }
  }
  return (
    <TalentStyle { ...props }>
      <div className="talents container-module-large">
        <ul className="talents-container">
          { breakpoint ||
            <li className="talent-container">
              <div className="profile-container">
                <p className="head typography-03">Name</p>
              </div>
              <div className="expertise-container">
                <p className="head typography-03">Expertise</p>
              </div>
            </li>
          }
          { talents.map((talent, index) => {
            return <>
              { breakpoint ?
                <li key={ `talent-${ index }` } className={ `talent-container-mobile ${ selected == index ? "is-open" : "" }` } { ...props }>
                  <button className="head-container" onClick={ () => onClickTalent(index) }>
                    <div className="profile-container">
                      <p className="name typography-05">{ talent.name }</p>
                      <div className="button-modal"></div>
                    </div>
                    <div className="expertises is-after">
                      <ul className="expertises-container" onScroll={ onScrollExpertises }>
                        { talent.expertises.map((expertise, index) => {  
                          return <li key={ `expertise-${ index }` } className="expertise-container">
                            <p className="typography-13">{ expertise }</p>
                          </li>
                        }) }
                      </ul>
                    </div>
                  </button>
                  <div className="infos-container">
                    <div className="networks-container">
                      { talent.email && <a className="email" href={ `mailto:${ talent.email }` }  target="_blank" rel="noopener noreferrer"><MailIcon /></a> }
                      { talent.instagram_account && <a className="instagram" href={ `https://www.instagram.com/${ talent.instagram_account }` }  target="_blank" rel="noopener noreferrer"><InstagramIcon /></a> }
                      { talent.twitter_account && <a className="twitter" href={ `https://twitter.com/${ talent.twitter_account }` }  target="_blank" rel="noopener noreferrer"><TwitterIcon /></a> }
                      { talent.behance_account && <a className="behance" href={ `https://www.behance.net/${ talent.behance_account }` }  target="_blank" rel="noopener noreferrer"><BehanceIcon /></a> }
                      { talent.portfolio && <a className="portfolio" href={ talent.portfolio }  target="_blank" rel="noopener noreferrer"><PortfolioIcon /></a> }
                    </div>
                  </div>
                </li>
              :
                <li key={ `talent-${ index }` } className="talent-container" { ...props }>
                  <div className="profile-container">
                    <p className="name typography-03">{ talent.name }</p>
                    <div className="networks-container">
                      { talent.email && <a className="email" href={ `mailto:${ talent.email }` }  target="_blank" rel="noopener noreferrer"><MailIcon /></a> }
                      { talent.instagram_account && <a className="instagram" href={ `https://www.instagram.com/${ talent.instagram }` }  target="_blank" rel="noopener noreferrer"><InstagramIcon /></a> }
                      { talent.twitter_account && <a className="twitter" href={ `https://twitter.com/${ talent.twitter }` }  target="_blank" rel="noopener noreferrer"><TwitterIcon /></a> }
                      { talent.behance_account && <a className="behance" href={ `https://www.behance.net/${ talent.behance }` }  target="_blank" rel="noopener noreferrer"><BehanceIcon /></a> }
                      { talent.portfolio && <a className="portfolio" href={ talent.portfolio }  target="_blank" rel="noopener noreferrer"><PortfolioIcon /></a> }
                    </div>
                  </div>
                  <div className="expertises-container">
                    <p className="typography-03">
                      { talent.expertises.map((expertise, index) => {  
                        return `${ expertise }${ index < talent.expertises.length - 1 ? ", " : '' }`
                      }) }
                    </p>
                  </div>
                </li>
              }
            </>
          }) }
        </ul>
      </div>
    </TalentStyle>
  )
}