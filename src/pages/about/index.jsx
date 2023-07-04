// Middlewares
import { getPageAbout } from '@/middlewares/librairies/pages/about';
// Next
import Head from 'next/head'
// Templates
import AboutTemplate from "@/components/templates/About"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function About({ about, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ about.meta } />
      <AboutTemplate publication={ about } />
    </>
  )
}

export async function getStaticProps(context) {
  const about = await getPageAbout()
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