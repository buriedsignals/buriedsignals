// Middlewares
import { getPageMembership } from '@/middlewares/librairies/pages/membership';
import { getUsersJury } from '@/middlewares/librairies/users/jury';
// Next
import Head from 'next/head'
// Templates
import MembershipTemplate from "@/components/templates/Membership"
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Membership({ membership, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ membership.page.meta } />
      <MembershipTemplate membership={ membership } />
    </>
  )
}

// export async function getStaticProps(context) {
//   const membership = await getUsersJury()
//   const page = await getPageMembership()
//   if (!page || !membership) {
//     return {
//       notFound: true,
//     }
//   }
//   membership.page = page
//   return {
//     props: { membership },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({ query }) {
  const membership = await getUsersJury(query)
  const page = await getPageMembership()
  if (!membership || !page) {
    return {
      notFound: true,
    }
  }
  membership.page = page
  return {
    props: { membership }
  }
}