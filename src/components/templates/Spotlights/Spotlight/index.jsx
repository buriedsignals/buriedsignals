// Styles
import { SpotlightTemplateStyle } from "./index.style"
// Scripts
import { copyClipboard } from "@/scripts/utils"
// Layouts
import Layout from "@/components/layouts"
// Modules
import SpotlightBanner from "@/components/banners/Spotlight"
import CommentsModule from "@/components/modules/Comments"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Links
import SecondaryLink from "@/components/links/Secondary"
// Icons
import FacebookIcon from "@/components/icons/Facebook"
import TwitterIcon from "@/components/icons/Twitter"
import LinkIcon from "@/components/icons/Link"
import ExternalLinkIcon from "@/components/icons/ExternalLink"

const post = {
  slug: "toto",
  url: "http://www.google.fr",
  author: "The new york times",
  categories: ["3D", "Dataviz", "Geomapping"],
  title: "Sunisa Lee - The Gymnast",
  description: "Lee, 18, is making her Olympic debut after the. Uncover the truth about the legal fishing industry. A challenging year. Her versatility...",
  image: {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    alt: "Default image"
  },
  awards: "week",
  likes: 0,
  comments: 10,
  source: {
    title: "articleurl.com",
    url: "https://www.google.fr"
  },
  submited_by: {
    name: "Amelia Wattenberger",
    image: {
      url: "/images/img-profil.jpg",
      alt: "Profil image"
    }
  }
}

export default function SpotlightTemplate({ spotlight, ...props }) {
  return (
    <Layout>
      <SpotlightTemplateStyle { ...props }>
        <div className="container-module-large links-container">
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
              <SecondaryLink href={ spotlight.source.url }>
                <p className="typography-03">Visit article</p>
                <ExternalLinkIcon />
              </SecondaryLink>
        </div>
        <div className="container-module-large banner-container">
          <SpotlightBanner post={ spotlight } />
        </div>
        <div className="container-module-large profil-container">
          <p className="typography-03 submitted">Submitted by<br/>{ spotlight.submited_by.name }</p>
          <div className="photo-container">
            <img src={ spotlight.submited_by.image.url } alt={ spotlight.submited_by.image.alt } />
          </div>
        </div>
        <CommentsModule />
      </SpotlightTemplateStyle>
    </Layout>
  )
}