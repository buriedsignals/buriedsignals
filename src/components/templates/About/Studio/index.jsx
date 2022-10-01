// Styles
import { StudioTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Module
import PostsListModule from "@/components/modules/PostsList"
import FlexibleContentModule from "@/components/modules/FlexibleContent"
// Links
import ThirstyLink from "@/components/links/Thirsty"

export default function StudioTemplate({ studio, projects, ...props }) {
  return (
    <Layout>
      <StudioTemplateStyle>
        <div className="hero-container">
          <h1 className="title container-module-medium typography-04">{ studio.description }</h1>
        </div>        
        <div className="projects-container">
          <PostsListModule type="project" posts={ projects.posts } max={ 6 } />
        </div>
        <FlexibleContentModule content={ studio.flexible_content } />
        <div className="contact-container">
          <ThirstyLink href="">Contact us</ThirstyLink>
        </div>
      </StudioTemplateStyle>
    </Layout>
  )
}