// Middlewares
import { getPageSpotlights } from '@/middlewares/librairies/pages/spotlights';
import { getPostsSpotlights } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightsTemplate from "@/components/templates/Spotlights"
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

// export async function getStaticProps({ params, ...context}) {
//   const spotlights = await getPostsSpotlights({ page: {
//     index: 1,
//     pageSize: 42
//   } })
//   const page = await getPageSpotlights()
//   spotlights.posts = spotlights.posts.slice(0, 5);
//   if (!spotlights || !page) {
//     return {
//       notFound: true,
//     }
//   }
//   spotlights.page = page
//   return {
//     props: { spotlights },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({ query }) {
  const spotlights = await getPostsSpotlights(query)
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
  // return {
  //   props: {
  //     spotlights: {
  //       page: {
  //         title: "Inspiration",
  //         description: "Lorem Ipsum",
  //         meta: {}
  //       },
  //       posts: []
  //     }
  //   }
  // }
}