// Middlewares
// import { getPageTerms } from '@/middlewares/librairies/pages/terms';
// Next
import Head from 'next/head'
// Templates
import TermsTemplate from "@/components/templates/Legal"

export default function Terms({ terms, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Terms</title>
      </Head>
      <TermsTemplate legal={ terms } />
    </>
  )
}

export async function getStaticProps(context) {
  const terms = null //await getPageTerms()
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