// Librairies
import { getPage } from "@/librairies/ghost-api"
// Templates
import AboutUsTemplate from "@/components/templates/About/AboutUs"

export default function AboutUs({ aboutUs, ...props }) {
  return (
    <AboutUsTemplate aboutUs={ aboutUs } />
  )
}

export async function getStaticProps(context) {
  const aboutUs = await getPage("about-us")
  if (!aboutUs) {
    return {
      notFound: true,
    }
  }
  return {
    props: { aboutUs }
  }
}