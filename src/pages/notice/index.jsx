// Middlewares
import { getPageNotice } from '@/middlewares/librairies/pages/notice';
// Next
import Head from 'next/head'
// Templates
import NoticeTemplate from "@/components/templates/Legal"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Notice({ notice, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ notice.page.meta } />
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