// Middlewares
import { getPagePublication } from '@/middlewares/librairies/pages/publication';
// Next
import Head from 'next/head'
// Templates
import AboutTemplate from "@/components/templates/About/Publication"

export default function About({ about, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | About</title>
      </Head>
      <AboutTemplate publication={ about } />
    </>
  )
}

export async function getStaticProps(context) {
  const about = await getPagePublication()
  if (!about) {
    return {
      notFound: true,
    }
  }
  return {
    props: { about },
    revalidate: 1
  }
}