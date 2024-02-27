// Middlewares
import { getPageSupporters } from '@/middlewares/librairies/pages/supporters';
import { getUsersExperts } from '@/middlewares/librairies/users/member';
// Next
import Head from 'next/head'
// Templates
import SupportersTemplate from "@/components/templates/Supporters"
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Supporters({ supporters, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ supporters.page.meta } />
      <SupportersTemplate supporters={ supporters } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const supporters = await getUsersExperts(query)
  const page = await getPageSupporters()
  if (!supporters || !page) {
    return {
      notFound: true,
    }
  }
  supporters.page = page
  return {
    props: { supporters }
  }
}