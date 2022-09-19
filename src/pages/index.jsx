// Middlewares
import { getPageSpotlights } from '@/middlewares-statamic/librairies/pages/spotlights';
import { getPostsSpotlights } from '@/middlewares-statamic/librairies/posts/spotlights';
// Templates
import SpotlightsTemplate from "@/components/templates/Spotlights"

export default function Spotlights({ spotlights, ...props }) {
  return (
    <SpotlightsTemplate spotlights={ spotlights } />
  )
}

export async function getStaticProps(context) {
  const spotlights = await getPostsSpotlights()
  const page = await getPageSpotlights()
  if (!spotlights || !page) {
    return {
      notFound: true,
    }
  }
  spotlights.page = page
  return {
    props: { spotlights }
  }
}