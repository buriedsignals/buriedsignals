// Styles
import { JuryTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function JuryTemplate({ jury, ...props }) {
  return (
    <Layout>
      <JuryTemplateStyle>
        <h1 className="title container-module-large typography-04">{ jury.page.title }</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{ jury.page.description }</p>
        </div>
        <PostsListModule type="jury" posts={ jury.users } max={ 6 } />
      </JuryTemplateStyle>
    </Layout>
  )
}