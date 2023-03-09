// Styles
import { SpotlightsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
import NewsletterModule from "@/components/modules/Newsletter"

export default function SpotlightsTemplate({ spotlights }) {  
  return (
    <Layout>
      <SpotlightsTemplateStyle>
        <h1 className="title container-module-large typography-04">{ spotlights.page.title }</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{ spotlights.page.description }</p>
        </div>
        <PostsListModule type="spotlight" posts={ spotlights.posts } categories={ spotlights.categories } awards={ spotlights.awards } geographies={ spotlights.geographies } max={ 6 } />
      </SpotlightsTemplateStyle>
    </Layout>
  )
}