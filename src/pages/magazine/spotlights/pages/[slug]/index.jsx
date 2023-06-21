// Middlewares
import { getPageSpotlights } from '@/middlewares/librairies/pages/spotlights';
import { getPostsSpotlights } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightsTemplate from "@/components/templates/Spotlights"

export default function Spotlights({ spotlights, ...props }) {
  return (
    <SpotlightsTemplate spotlights={ spotlights } />
  )
}

export async function getStaticPaths() {
  const pageSize = 42
  const spotlights = await getPostsSpotlights()
  const paths = spotlights.posts.filter((post) => post.slug !== null).filter((post, index) => index % pageSize == 0).map((post, index) => ({
    params: { slug: (index + 1).toString(), pageSize: pageSize },
  }))
  return { paths, fallback: "blocking" }
}

export async function getStaticProps({params, ...context}) {
  console.log(context)
  const spotlights = await getPostsSpotlights({ page: {
    index: params.slug,
    pageSize: params.pageSize || 2
  } })
  const page = await getPageSpotlights()
  if (!spotlights || !page) {
    return {
      notFound: true,
    }
  }
  spotlights.page = page
  return {
    props: { spotlights },
    revalidate: 1
  }
}