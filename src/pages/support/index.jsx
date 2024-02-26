// Middlewares
import { getPageSupport } from '@/middlewares/librairies/pages/support';
import { getUsersSupporter } from '@/middlewares/librairies/users/supporter';
// Next
import Head from 'next/head'
// Templates
import SupportTemplate from "@/components/templates/Support"
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Support({ support, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ support.page.meta } />
      <SupportTemplate support={ support } />
    </>
  )
}

// export async function getStaticProps(context) {
//   const support = await getUsersSupporter()
//   const page = await getPageSupport()
//   if (!page || !support) {
//     return {
//       notFound: true,
//     }
//   }
//   support.page = page
//   return {
//     props: { support },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({ query }) {
  const support = await getUsersSupporter(query)
  const page = await getPageSupport()
  if (!support || !page) {
    return {
      notFound: true,
    }
  }
  support.page = page
  return {
    props: { support }
  }
}