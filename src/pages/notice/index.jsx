// Librairies
import { getPage } from "@/librairies/ghost-api"
// Templates
import NoticeTemplate from "@/components/templates/Legal"

export default function Notice({ notice, ...props }) {
  return (
    <NoticeTemplate legal={ notice } />
  )
}

export async function getStaticProps(context) {
  const notice = await getPage("notice")
  if (!notice) {
    return {
      notFound: true,
    }
  }
  return {
    props: { notice }
  }
}