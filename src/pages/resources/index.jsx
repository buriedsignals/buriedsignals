// Middlewares
import { getPageResources } from '@/middlewares/librairies/pages/resources';
import { getPostsResources } from '@/middlewares/librairies/posts/resources';
// Templates
import ResourcesTemplate from "@/components/templates/Resources"

export default function Resources({ resources, ...props }) {
  return (
    <ResourcesTemplate resources={ resources } />
  )
}

export async function getStaticProps(context) {
  const resources = await getPostsResources()
  const page = await getPageResources()
  if (!resources || !page) {
    return {
      notFound: true,
    }
  }
  resources.page = page
  return {
    props: { resources }
  }
}