// Middlewares
import { getPostsSpotlights, getPostSpotlight } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightTemplate from "@/components/templates/Spotlights/Spotlight"

export default function Spotlight({ spotlight, ...props }) {
  return (
    <SpotlightTemplate spotlight={ spotlight } />
  )
}

export async function getStaticPaths() {
  const spotlights = await getPostsSpotlights()
  const paths = spotlights.posts.filter((post) => post.slug !== null).map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
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