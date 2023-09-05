// Styles
import { DirectoryTemplateStyle } from "./index.style"
// Next
import dynamic from "next/dynamic"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
// Accordions
import TalentAccordion from "@/components/accordions/Talents"

export default function DirectoryTemplate({ directory, ...props }) {
  return (
    <Layout>
      <DirectoryTemplateStyle>
        <h1 className="title container-module-large typography-04">{directory.page.title}</h1>
        <h2 className="subtitle container-module-large typography-23">Member Index</h2>
        <PostsListModule type="directory" posts={directory.spotlights} meta={ directory.meta }/>
        <h2 className="subtitle container-module-large typography-23">Public Index</h2>
        <TalentAccordion talents={ directory.talents } />
      </DirectoryTemplateStyle>
    </Layout>
  )
}
