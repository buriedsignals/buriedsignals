// Middlewares
import { getPageTerms } from '@/middlewares/librairies/pages/terms';
// Templates
import TermsTemplate from "@/components/templates/Legal"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Terms({ terms, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ terms.meta } />
      <TermsTemplate legal={ terms } />
    </>
  )
}

export async function getStaticProps(context) {
  const terms = await getPageTerms()
  if (!terms) {
    return {
      notFound: true,
    }
  }
  return {
    props: { terms },
    revalidate: 1
  }
}