// Middlewares
import { getPostsInsights, getPostInsight } from '@/middlewares/librairies/posts/insights';
// Templates
import InsightTemplate from '@/components/templates/Insights/Insight';

export default function Insight({ insight, ...props }) {
  return (
    <InsightTemplate insight={ insight } />
  )
}

export async function getStaticPaths() {
  const insights = await getPostsInsights()
  const paths = insights.posts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({params, ...context}) {
  const insight = await getPostInsight(params.slug)
  if (!insight) {
    return {
      notFound: true,
    }
  }
  return {
    props: { insight },
    revalidate: 30
  }
}