// Styles
import { InsightsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function InsightsTemplate({ insights, ...props }) {
  return (
    <Layout>
      <InsightsTemplateStyle>
        <h1 className="title container-module-large typography-04">{ insights.page.title }</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{ insights.page.description }</p>
        </div>
        <PostsListModule type="insight" posts={ insights.posts } categories={ insights.categories } max={ 6 } />
      </InsightsTemplateStyle>
    </Layout>
  )
}