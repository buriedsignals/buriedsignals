// Librairies
import { getPosts } from '@/librairies/ghost-api';
// Templates
import SpotlightsTemplate from "@/components/templates/Spotlights"

export default function Spotlights({ spotlights, ...props }) {
  return (
    <SpotlightsTemplate spotlights={ spotlights } />
  )
}

export async function getStaticProps(context) {
  const spotlights = await getPosts("spotlights")
  if (!spotlights) {
    return {
      notFound: true,
    }
  }
  return {
    props: { spotlights }
  }
}