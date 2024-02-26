// Styles
import { ExpertsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
import PostsSliderModule from "@/components/modules/PostsSlider"

export default function ExpertsTemplate({ experts, ...props }) {
  return (
    <Layout>
      <ExpertsTemplateStyle>
        <h1 className="title container-module-large typography-04">{experts.page.title}</h1>
        { experts.page.description && 
          <div className="container-module-large description-container">
            <p className="typography-07">{ experts.page.description }</p>
          </div>
        }
        <div className="posts-container">
          <PostsSliderModule type="experts" posts={experts.spotlights} meta={ experts.meta }/>
        </div>
        {/* <PostsListModule type="experts" posts={experts.spotlights} meta={{ sectionSize: 6 }}/> */}
      </ExpertsTemplateStyle>
    </Layout>
  )
}
