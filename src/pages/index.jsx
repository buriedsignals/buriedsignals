// Middlewares
import { getPageSpotlights } from '@/middlewares/librairies/pages/spotlights';
import { getPostsSpotlights } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightsTemplate from "@/components/templates/Inspirations"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Spotlights({ spotlights, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ spotlights.page.meta } />
      <SpotlightsTemplate spotlights={ spotlights } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const [spotlights, page] = await Promise.all([getPostsSpotlights(query), getPageSpotlights()])
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