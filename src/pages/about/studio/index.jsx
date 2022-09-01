// Librairies
import { getPage, getPosts } from "@/librairies/ghost-api"
// Templates
import StudioTemplate from "@/components/templates/About/Studio"

export default function Studio({ studio, projects, ...props }) {
  return (
    <StudioTemplate studio={ studio } projects={ projects } />
  )
}

export async function getStaticProps(context) {
  const studio = await getPage("studio")
  const projects = await getPosts("projects")
  if (!studio) {
    return {
      notFound: true,
    }
  }
  return {
    props: { studio: studio, projects: projects }
  }
}