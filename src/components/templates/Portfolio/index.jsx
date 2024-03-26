// Styles
import { PortfolioTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function PortfolioTemplate({ projects }) {  
  return (
    <Layout>
      <PortfolioTemplateStyle>
        <h1 className="title container-module-large typography-04">{ projects.page.title }</h1>
        { projects.page.description && 
          <div className="container-module-large description-container">
            <p className="typography-07">{ projects.page.description }</p>
          </div>
        }
        <PostsListModule type="project" posts={ projects.posts } meta={ projects.meta } />
      </PortfolioTemplateStyle>
    </Layout>
  )
}