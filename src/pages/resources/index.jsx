// Middlewares
import { getPageResources } from '@/middlewares/librairies/pages/resources';
import { getPostsResources } from '@/middlewares/librairies/posts/resources';
// Templates
import ResourcesTemplate from "@/components/templates/Resources"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Resources({ resources, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ resources.page.meta } />
      <ResourcesTemplate resources={ resources } />
    </>
  )
}

// export async function getStaticProps(context) {
//   const resources = await getPostsResources()
//   const page = await getPageResources()
//   if (!resources || !page) {
//     return {
//       notFound: true,
//     }
//   }
//   resources.page = page
//   return {
//     props: { resources },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({ query }) {
  const [resources, page] = await Promise.all([getPostsResources(query), getPageResources()])
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