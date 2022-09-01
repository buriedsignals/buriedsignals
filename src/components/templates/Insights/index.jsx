// Styles
import { InsightsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import PostsListModule from "@/components/modules/PostsList"

const posts = [
  {
    slug: "toto",
    author: "Matt Conlen",
    categories: ["Research"],
    title: "Can You Recall What Brings You Joy?",
    description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
    image: {
      url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      alt: "Default image"
    },
    published_at: "2022-08-24T09:54:04.908Z"
  },
  {
    slug: "titi",
    author: "Matt Conlen",
    categories: ["Interviews"],
    title: "Can You Recall What Brings You Joy? Can You Recall What Brings You Joy?",
    description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
    image: {
      url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      alt: "Default image"
    },
    source: {
      title: "articleurl.com",
      url: "https://www.google.fr"
    },
    published_at: "2022-08-24T09:54:04.908Z"
  },
  {
    slug: "titi",
    author: "Matt Conlen",
    categories: ["Interviews"],
    title: "Can You Recall What Brings You Joy? Can You Recall What Brings You Joy?",
    description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
    image: {
      url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      alt: "Default image"
    },
    source: {
      title: "articleurl.com",
      url: "https://www.google.fr"
    },
    published_at: "2022-08-24T09:54:04.908Z"
  },
]
const categories = ["Research", "Interviews", "How to"]

export default function InsightsTemplate({ insights, ...props }) {
  return (
    <Layout>
      <InsightsTemplateStyle>
        <h1 className="title container-module-large typography-04">Insights</h1>
        <PostsListModule type="insight" posts={ insights.posts } categories={ insights.categories } max={ 6 } />
      </InsightsTemplateStyle>
    </Layout>
  )
}