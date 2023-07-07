// Next
import Head from 'next/head'
// Middlewares
import { getPostsInsights, getPostInsight } from '@/middlewares/librairies/posts/insights';
// Templates
import InsightTemplate from '@/components/templates/Insights/Insight';
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Insight({ insight, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ insight.meta } />
      <InsightTemplate insight={ insight } />
    </>
  )
}

// export async function getStaticPaths() {
//   const insights = await getPostsInsights()
//   const paths = insights.posts.filter((post) => post.slug !== null).map((post) => ({
//     params: { slug: post.slug },
//   }))
//   return { paths, fallback: "blocking" }
// }

// export async function getStaticProps({params, ...context}) {
//   const insight = await getPostInsight(params.slug)
//   if (!insight) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: { insight },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({params, ...context}) {
  const insight = await getPostInsight(params.slug)
  if (!insight) {
    return {
      notFound: true,
    }
  }
  return {
    props: { insight }
  }
}