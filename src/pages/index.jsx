// Middlewares
import { getPageSpotlights } from '@/middlewares/librairies/pages/spotlights';
import { getPostsSpotlights } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightsTemplate from "@/components/templates/Spotlights"
import { getUserCookies } from '@/scripts/utils';

export default function Spotlights({ spotlights, ...props }) {
  console.log(getUserCookies())
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
    props: { spotlights },
    revalidate: 1
  }
}