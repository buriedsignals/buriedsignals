// Styles
import { DirectoryTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function DirectoryTemplate({ directory, ...props }) {
  return (
    <Layout>
      <DirectoryTemplateStyle>
        <h1 className="title container-module-large typography-04">{directory.page.title}</h1>
        <PostsListModule type="directory" posts={directory.spotlights} meta={ directory.meta }/>
        {/* <PostsListModule type="directory" posts={directory.spotlights} meta={{ sectionSize: 6 }}/> */}
      </DirectoryTemplateStyle>
    </Layout>
  )
}
