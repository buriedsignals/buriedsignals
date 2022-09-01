// Styles
import { ResourcesTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import PostsListModule from "@/components/modules/PostsList"

const posts = [
  {
    categories: ["Research"],
    title: "Can You Recall What Brings You Joy?",
    description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
    image: {
      url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      alt: "Default image"
    },
    source: {
      title: "articleurl.com",
      url: "https://www.google.fr"
    }
  },
  {
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
    }
  },
  {
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
    }
  },
  {
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
    }
  },
  {
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
    }
  },
  {
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
    }
  },
  {
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
    }
  },
]
const categories = ["Research", "Interviews", "How to"]

export default function ResourcesTemplate({ resources, ...props }) {
  return (
    <Layout>
      <ResourcesTemplateStyle>
        <h1 className="title container-module-large typography-04">Resources</h1>
        <PostsListModule type="resource" posts={ resources.posts } categories={ resources.categories } max={ 6 } />
      </ResourcesTemplateStyle>
    </Layout>
  )
}