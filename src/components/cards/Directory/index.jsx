// Styles
import { DirectoryStyle } from "./index.style"
// Icons
import MailIcon from "@/components/icons/Mail"
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import BehanceIcon from "@/components/icons/Behance"
import PortfolioIcon from "@/components/icons/Portfolio"

export default function Directory({ post, ...props }) {
  // Handlers
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
    <DirectoryStyle { ...props }>
      <div className="directory-container">
        <div className="profile-container">
          <div className="photo-container">
            <img src={ post.image.url } alt={ post.image.alt } />
          </div>
          <div className="info-container">
            <p className="name typography-11">{ post.name }</p>
          </div>
        </div>
        <div className="expertises is-after">
          <ul className="expertises-container" onScroll={ onScrollExpertises }>
            { post.expertises.map((expertise, index) => {
              return <li key={ `expertise-${ index }` } className="expertise-container">
                <p className="typography-05">{ expertise }</p>
              </li>
            }) }
          </ul>
        </div>
        <div className="networks-container">
          { post.email && <a className="email" href={ `mailto:${ post.email }` }  target="_blank" rel="noopener noreferrer"><MailIcon /></a> }
          { post.instagram_account && <a className="instagram" href={ `https://www.instagram.com/${ post.instagram_account }` }  target="_blank" rel="noopener noreferrer"><InstagramIcon /></a> }
          { post.twitter_account && <a className="twitter" href={ `https://twitter.com/${ post.twitter_account }` }  target="_blank" rel="noopener noreferrer"><TwitterIcon /></a> }
          { post.behance_account && <a className="behance" href={ `https://www.behance.net/${ post.behance_account }` }  target="_blank" rel="noopener noreferrer"><BehanceIcon /></a> }
          { post.portfolio && <a className="portfolio" href={ post.portfolio }  target="_blank" rel="noopener noreferrer"><PortfolioIcon /></a> }
        </div>
      </div>
    </DirectoryStyle>
  )
}