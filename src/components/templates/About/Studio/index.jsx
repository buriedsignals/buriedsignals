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
  const firstsPosts = projects.posts.filter((post, index) => (index == 0 || index == 1))
  const lastsPosts = projects.posts.filter((post, index) => (index != 0 && index != 1))
  console.log(firstsPosts, lastsPosts)
  return (
    <Layout>
      <StudioTemplateStyle>
        <div className="hero-container">
          <h1 className="title container-module-medium typography-04">{ studio.description }</h1>
        </div>        
        <div className="projects-container">
          <PostsListModule type="project" posts={ firstsPosts } max={ 6 } />
        </div>
        <div className="flexible-container">
          <FlexibleContentModule content={ studio.flexible_content } />
        </div>
        <div className="contact-container">
          <ThirstyLink href="">Contact us</ThirstyLink>
        </div>
        <div className="projects-more-container">
          <PostsListModule type="project" posts={ lastsPosts } max={ 6 } />
        </div>
      </StudioTemplateStyle>
    </Layout>
  )
}