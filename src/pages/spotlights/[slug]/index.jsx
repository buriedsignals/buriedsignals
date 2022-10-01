// Next
import Head from 'next/head'
// Middlewares
import { getPostsSpotlights, getPostSpotlight } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightTemplate from "@/components/templates/Spotlights/Spotlight"

export default function Spotlight({ spotlight, ...props }) {
  console.log(spotlight)
  return (
    <>
      {/* <Head>
        <meta key='description' name='description' content={ spotlight.description } />
        <meta key='og-title' property='og:title' content={ spotlight.title } />
        <meta key='og-description' property='og:description' content={ spotlight.description } />
        <meta key='og-image' property='og:image' content={ spotlight.image.url } />
        <meta key='tw-title' name='twitter:title' content={ spotlight.title } />
        <meta key='tw-description' name='twitter:description' content={ spotlight.description } />
        <meta key='tw-image' name='twitter:image:src' content={ spotlight.image.url } />
      </Head>
      <SpotlightTemplate spotlight={ spotlight } /> */}
    </>
  )
}

export async function getStaticPaths() {
  const spotlights = await getPostsSpotlights()
  const paths = spotlights.posts.filter((post) => post.slug !== null).map((post) => ({
    params: { slug: post.slug },
  }))
  console.log(paths)
  return { paths, fallback: true }
}

export async function getStaticProps({params, ...context}) {
  // const spotlight = await getPostSpotlight(params.slug)
  // if (!spotlight) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: { spotlight: "ok" },
    revalidate: 1
  }
}