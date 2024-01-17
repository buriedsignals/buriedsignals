// Styles
import { InvestigationsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
// Icons
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import YoutubeIcon from "@/components/icons/Youtube"

export default function InvestigationsTemplate({ investigations }) {  
  return (
    <Layout>
      <InvestigationsTemplateStyle>
        <h1 className="title container-module-large typography-04">{ investigations.page.title }</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{ investigations.page.description }</p>
        </div>
        <PostsListModule type="investigation" posts={ investigations.posts } meta={ investigations.meta } />
      </InvestigationsTemplateStyle>
    </Layout>
  )
}