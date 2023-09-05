// Middlewares
import { getPageSpotlight } from '@/middlewares/librairies/pages/spotlight';
import { getPostSpotlight } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightTemplate from "@/components/templates/Inspirations/Inspiration"
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