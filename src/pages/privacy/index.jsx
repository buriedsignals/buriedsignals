// Middlewares
import { getPagePrivacy } from '@/middlewares/librairies/pages/privacy';
// Next
import Head from 'next/head'
// Templates
import PrivacyTemplate from "@/components/templates/Legal"

export default function Privacy({ privacy, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Privacy</title>
      </Head>
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