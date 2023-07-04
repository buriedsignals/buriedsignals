// Middlewares
import { getPagePrivacy } from '@/middlewares/librairies/pages/privacy';
// Next
import Head from 'next/head'
// Templates
import PrivacyTemplate from "@/components/templates/Legal"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Privacy({ privacy, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ privacy.page.meta } />
      <PrivacyTemplate legal={ privacy } />
    </>
  )
}

export async function getStaticProps(context) {
  const privacy = await getPagePrivacy()
  if (!privacy) {
    return {
      notFound: true,
    }
  }
  return {
    props: { privacy },
    revalidate: 1
  }
}