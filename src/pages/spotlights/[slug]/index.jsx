// Librairies
import { getPost, getPosts } from '@/librairies/ghost-api';
// Templates
import SpotlightTemplate from "@/components/templates/Spotlights/Spotlight"

export default function Spotlight({ spotlight, ...props }) {
  return (
    <SpotlightTemplate spotlight={ spotlight } />
  )
}

export async function getStaticPaths() {
  const spotlights = await getPosts("spotlights")
  const paths = spotlights.posts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({params, ...context}) {
  const spotlight = await getPost("spotlight", params.slug)
  if (!spotlight) {
    return {
      notFound: true,
    }
  }
  return {
    props: { spotlight }
  }
}