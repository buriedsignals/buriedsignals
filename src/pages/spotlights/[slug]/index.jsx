// Middlewares
import { getPageSpotlight } from '@/middlewares/librairies/pages/spotlight';
import { getPostSpotlight } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightTemplate from "@/components/templates/Spotlights/Spotlight"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Spotlight({ spotlight, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ spotlight.meta } />
      <SpotlightTemplate spotlight={ spotlight } />
    </>
  )
}

// export async function getStaticPaths() {
//   const spotlights = await getPostsSpotlights()
//   const paths = spotlights.posts.filter((post) => post.slug !== null).map((post) => ({
//     params: { slug: post.slug },
//   }))
//   return { paths, fallback: "blocking" }
// }

// export async function getStaticProps({params, ...context}) {
//   const spotlight = await getPostSpotlight(params.slug)
//   if (!spotlight) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: { spotlight },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({params, ...context}) {
  const spotlight = await getPostSpotlight(params.slug)
  const page = await getPageSpotlight()
  if (!spotlight || !page) {
    return {
      notFound: true,
    }
  }
  const metricsMerge = {}
  for (let key in spotlight.metrics) {
    metricsMerge[key] = Object.assign(spotlight.metrics[key], page.flexible_content[0][key])
  }
  spotlight.metrics = metricsMerge
  return {
    props: { spotlight }
  }
}