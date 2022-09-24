// Middlewares
import { getPagePrivacy } from '@/middlewares/librairies/pages/privacy';
// Templates
import PrivacyTemplate from "@/components/templates/Legal"

export default function Privacy({ privacy, ...props }) {
  return (
    <PrivacyTemplate legal={ privacy } />
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
    revalidate: 30
  }
}