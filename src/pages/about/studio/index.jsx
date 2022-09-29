// Middlewares
import { getPageStudio } from '@/middlewares/librairies/pages/studio';
import { getPostsProjects } from '@/middlewares/librairies/posts/projects';
// Templates
import StudioTemplate from "@/components/templates/About/Studio"

export default function Studio({ studio, projects, ...props }) {
  return (
    <StudioTemplate studio={ studio } projects={ projects } />
  )
}

export async function getStaticProps(context) {
  const studio = await getPageStudio()
  const projects = await getPostsProjects()
  if (!studio) {
    return {
      notFound: true,
    }
  }
  return {
    props: { studio: studio, projects: projects },
    revalidate: 1
  }
}