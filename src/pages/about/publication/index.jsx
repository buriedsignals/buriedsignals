// Middlewares
import { getPagePublication } from '@/middlewares/librairies/pages/publication';
// Templates
import PublicationTemplate from "@/components/templates/About/Publication"

export default function Publication({ publication, ...props }) {
  return (
    <PublicationTemplate publication={ publication } />
  )
}

export async function getStaticProps(context) {
  const publication = await getPagePublication()
  if (!publication) {
    return {
      notFound: true,
    }
  }
  return {
    props: { publication },
    revalidate: 1
  }
}