// Styles
import { SpotlightsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
// Icons
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import YoutubeIcon from "@/components/icons/Youtube"

export default function SpotlightsTemplate({ spotlights }) {  
  return (
    <Layout>
      <SpotlightsTemplateStyle>
        <h1 className="title container-module-large typography-04">{ spotlights.page.title }</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{ spotlights.page.description }</p>
            <div className="socials">            
              <a href="https://twitter.com/buriedsignals" className="network" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
              <a href="https://youtube.com/@buriedsignals" className="network" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
              <a href="https://www.instagram.com/buriedsignals" className="network" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/buried-signals" className="network" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            </div>
        </div>
        <PostsListModule type="spotlight" posts={ spotlights.posts } categories={ spotlights.categories } awards={ spotlights.awards } geographies={ spotlights.geographies } meta={ spotlights.meta } />
      </SpotlightsTemplateStyle>
    </Layout>
  )
}