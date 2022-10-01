// Next
import Head from 'next/head'
// Middlewares
import { getPostsInsights, getPostInsight } from '@/middlewares/librairies/posts/insights';
// Templates
import InsightTemplate from '@/components/templates/Insights/Insight';

export default function Insight({ insight, ...props }) {
  return (
    <>
      <Head>
        <meta key='description' name='description' content={ insight.description } />
        <meta key='og-title' property='og:title' content={ insight.title } />
        <meta key='og-description' property='og:description' content={ insight.description } />
        <meta key='og-image' property='og:image' content={ insight.image.url } />
        <meta key='tw-title' name='twitter:title' content={ insight.title } />
        <meta key='tw-description' name='twitter:description' content={ insight.description } />
        <meta key='tw-image' name='twitter:image:src' content={ insight.image.url } />
      </Head>
      <InsightTemplate insight={ insight } />
    </>
  )
}

export async function getStaticPaths() {
  const insights = await getPostsInsights()
  const paths = insights.posts.filter((post) => post.slug !== null).map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: "blocking" }
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
    revalidate: 1
  }
}