// Middlewares
import { getPageNotice } from '@/middlewares/librairies/pages/notice';
// Next
import Head from 'next/head'
// Templates
import NoticeTemplate from "@/components/templates/Legal"

export default function Notice({ notice, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Notice</title>
      </Head>
      <NoticeTemplate legal={ notice } />
    </>
  )
}

export async function getStaticProps(context) {
  const notice = await getPageNotice()
  if (!notice) {
    return {
      notFound: true,
    }
  }
  return {
    props: { notice },
    revalidate: 1
  }
}