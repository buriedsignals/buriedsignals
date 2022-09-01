// Styles
import { StudioTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Module
import PostsListModule from "@/components/modules/PostsList"
// Links
import ThirstyLink from "@/components/links/Thirsty"

export default function StudioTemplate({ studio, projects, ...props }) {
  return (
    <Layout>
      <StudioTemplateStyle>
        <div className="hero-container">
          <h1 className="title container-module-medium typography-04">{ studio.title }</h1>
        </div>        
        <div className="projects-container">
          <PostsListModule type="project" posts={ projects.posts } max={ 6 } />
        </div>
        <div className="html-container" dangerouslySetInnerHTML={{ __html: studio.content }} />
        <div className="contact-container">
          <ThirstyLink href="" >Contact us</ThirstyLink>
        </div>
      </StudioTemplateStyle>
    </Layout>
  )
}