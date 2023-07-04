// Styles
import { ResourcesTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function ResourcesTemplate({ resources, ...props }) {
  // Pin get started
  resources.posts = resources.posts.sort(function (x, y) { return x.id == 36 ? -1 : y.id == 36 ? 1 : 0; });
  return (
    <Layout>
      <ResourcesTemplateStyle>
        <h1 className="title container-module-large typography-04">{resources.page.title}</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{resources.page.description}</p>
        </div>
        <PostsListModule type="resource" posts={resources.posts} categories={resources.categories} meta={resources.meta} />
      </ResourcesTemplateStyle>
    </Layout>
  )
}