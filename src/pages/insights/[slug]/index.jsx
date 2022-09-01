// Librairies
import { getPost, getPosts } from '@/librairies/ghost-api';
// Templates
import InsightTemplate from "@/components/templates/Insights/Insight"

export default function Insight({ insight, ...props }) {
  return (
    <InsightTemplate insight={ insight } />
  )
}

export async function getStaticPaths() {
  const insights = await getPosts("insights")
  const paths = insights.posts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({params, ...context}) {
  const insight = await getPost("insight", params.slug)
  if (!insight) {
    return {
      notFound: true,
    }
  }
  return {
    props: { insight }
  }
}