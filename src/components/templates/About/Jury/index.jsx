// Styles
import { JuryTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function JuryTemplate({ jury, ...props }) {
  return (
    <Layout>
      <JuryTemplateStyle>
        <h1 className="title container-module-large typography-04">Jury</h1>
        <PostsListModule type="jury" posts={ jury } max={ 6 } />
      </JuryTemplateStyle>
    </Layout>
  )
}