// Middlewares
import { getPageNotice } from '@/middlewares/librairies/pages/notice';
// Templates
import NoticeTemplate from "@/components/templates/Legal"

export default function Notice({ notice, ...props }) {
  return (
    <NoticeTemplate legal={ notice } />
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
    revalidate: 30
  }
}