// Middlewares
import { getPageAboutUs } from '@/middlewares/librairies/pages/about-us';
// Templates
import AboutUsTemplate from "@/components/templates/About/AboutUs"

export default function AboutUs({ aboutUs, ...props }) {
  return (
    <AboutUsTemplate aboutUs={ aboutUs } />
  )
}

export async function getStaticProps(context) {
  const aboutUs = await getPageAboutUs()
  if (!aboutUs) {
    return {
      notFound: true,
    }
  }
  return {
    props: { aboutUs },
    revalidate: 30
  }
}