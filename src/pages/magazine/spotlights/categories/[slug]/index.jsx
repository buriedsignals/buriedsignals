// Next
import Head from 'next/head'
// Middlewares
import { getPostsSpotlights, getPostSpotlight } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightTemplate from "@/components/templates/Spotlights/Spotlight"

export default function SpotlightsCategories({ spotlight, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>{ `Buried Signals | Spotlight : ${ spotlight.title }` }</title>
        <meta key='description' name='description' content={ spotlight.description } />
        <meta key='og-title' property='og:title' content={ spotlight.title } />
        <meta key='og-description' property='og:description' content={ spotlight.description } />
        <meta key='og-image' property='og:image' content={ spotlight.image.url } />
        <meta key='tw-title' name='twitter:title' content={ spotlight.title } />
        <meta key='tw-description' name='twitter:description' content={ spotlight.description } />
        <meta key='tw-image' name='twitter:image:src' content={ spotlight.image.url } />
      </Head>
      <SpotlightTemplate spotlight={ spotlight } />
    </>
  )
}

export async function getStaticPaths() {
  const spotlights = await getPostsSpotlights()
  const paths = spotlights.categories.map((category) => ({
    params: { slug: category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') },
  }))
  return { paths, fallback: "blocking" }
}

export async function getStaticProps({params, ...context}) {
  const spotlight = await getPostSpotlight(params.slug)
  if (!spotlight) {
    return {
      notFound: true,
    }
  }
  return {
    props: { spotlight },
    revalidate: 1
  }
}