// Middlewares
import { getPageInsights } from '@/middlewares/librairies/pages/insights';
import { getPostsInsights } from '@/middlewares/librairies/posts/insights';
// Next
import Head from 'next/head'
// Templates
import InsightsTemplate from "@/components/templates/Insights"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Insights({ insights, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ insights.page.meta } />
      <InsightsTemplate insights={ insights } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const insights = await getPostsInsights(query)
  const page = await getPageInsights()
  if (!insights || !page) {
    return {
      notFound: true,
    }
  }
  insights.page = page
  return {
    props: { insights }
  }
}