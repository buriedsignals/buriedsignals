// Styles
import { SpotlightTemplateStyle } from "./index.style"
// Scripts
import { copyClipboard } from "@/scripts/utils"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import SpotlightBanner from "@/components/banners/Inspiration"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Links
import SecondaryLink from "@/components/links/Secondary"
// Icons
import FacebookIcon from "@/components/icons/Facebook"
import TwitterIcon from "@/components/icons/Twitter"
import LinkIcon from "@/components/icons/Link"
import ArrowIcon from "@/components/icons/Arrow"

export default function SpotlightTemplate({ spotlight, ...props }) {
  return (
    <Layout>
      <SpotlightTemplateStyle { ...props }>
        <div className="container-module-large links-container">
          <SecondaryLink href="/" intern={ true }>
            <ArrowIcon className="arrow" />
            <p className="typography-03">Back to list</p>
          </SecondaryLink>
          <ul className="share-container">
            <li>
              <SecondaryLink href={ `https://www.facebook.com/sharer/sharer.php?p[url]=${ spotlight.source.url }` }>
                <FacebookIcon />
              </SecondaryLink>
            </li>
            <li>
              <SecondaryLink href={ `https://twitter.com/intent/tweet?url=${ spotlight.source.url }` }>
                <TwitterIcon size="small" />
              </SecondaryLink>
            </li>
            <li>
              <SecondaryButton onClickButton={ () => copyClipboard(spotlight.source.url) } >
                <LinkIcon />
              </SecondaryButton>
            </li>
          </ul>
        </div>
        <div className="container-module-large banner-container">
          <SpotlightBanner post={ spotlight } />
        </div>
        <div className="container-module-large profil-container">
          <p className="typography-03 submitted">Submitted by<br/>{ spotlight.submited_by.name }</p>
          {
            spotlight.submited_by.link ? 
              <a className="photo-container" href={ spotlight.submited_by.link } target="_blank" rel="noopener noreferrer">
                <img src={ spotlight.submited_by.image.url } alt={ spotlight.submited_by.image.alt } />
              </a>
            :
              <div className="photo-container">
                <img src={ spotlight.submited_by.image.url } alt={ spotlight.submited_by.image.alt } />
              </div>
          }
        </div>
      </SpotlightTemplateStyle>
    </Layout>
  )
}