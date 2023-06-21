// Middlewares
import { getPageInsights } from '@/middlewares/librairies/pages/insights';
import { getPostsInsights } from '@/middlewares/librairies/posts/insights';
// Next
import Head from 'next/head'
// Templates
import InsightsTemplate from "@/components/templates/Insights"

export default function Insights({ insights, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Insights</title>
      </Head>
      <InsightsTemplate insights={ insights } />
    </>
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
    revalidate: 1
  }
}