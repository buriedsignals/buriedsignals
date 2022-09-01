// Librairies
import { getPosts } from '@/librairies/ghost-api';
// Templates
import InsightsTemplate from "@/components/templates/Insights"

export default function Insights({ insights, ...props }) {
  return (
    <InsightsTemplate insights={ insights } />
  )
}

export async function getStaticProps(context) {
  const insights = await getPosts("insights")
  if (!insights) {
    return {
      notFound: true,
    }
  }
  return {
    props: { insights }
  }
}