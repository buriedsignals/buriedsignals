// Librairies
import { getPage } from "@/librairies/ghost-api"
// Templates
import PrivacyTemplate from "@/components/templates/Legal"

export default function Privacy({ privacy, ...props }) {
  return (
    <PrivacyTemplate legal={ privacy } />
  )
}

export async function getStaticProps(context) {
  const privacy = await getPage("privacy")
  if (!privacy) {
    return {
      notFound: true,
    }
  }
  return {
    props: { privacy }
  }
}