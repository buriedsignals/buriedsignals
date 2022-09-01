// Librairies
import { getPosts } from '@/librairies/ghost-api';
// Templates
import ResourcesTemplate from "@/components/templates/Resources"

export default function Resources({ resources, ...props }) {
  return (
    <ResourcesTemplate resources={ resources } />
  )
}

export async function getStaticProps(context) {
  const resources = await getPosts("resources")
  if (!resources) {
    return {
      notFound: true,
    }
  }
  return {
    props: { resources }
  }
}