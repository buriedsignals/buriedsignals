// Middlewares
import { getPageInsights } from '@/middlewares/librairies/pages/insights';
import { getPostsInsights } from '@/middlewares/librairies/posts/insights';
// Templates
import InsightsTemplate from "@/components/templates/Insights"

export default function Insights({ insights, ...props }) {
  return (
    <InsightsTemplate insights={ insights } />
  )
}

export async function getStaticProps(context) {
  const insights = await getPostsInsights()
  const page = await getPageInsights()
  if (!insights || !page) {
    return {
      notFound: true,
    }
  }
  insights.page = page
  return {
    props: { insights },
    revalidate: 30
  }
}