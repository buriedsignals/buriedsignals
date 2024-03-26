// Middlewares
import { getPagePortfolio } from '@/middlewares/librairies/pages/portfolio';
import { getPostsProjects } from '@/middlewares/librairies/posts/projects';
// Templates
import PortfolioTemplate from "@/components/templates/Portfolio"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Portfolio({ projects, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ projects.meta } />
      <PortfolioTemplate projects={ projects } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  console.log('Test portfolio')
  const projects = await getPostsProjects(query)
  console.log('projects', projects)
  const page = await getPagePortfolio()
  console.log('page', page)
  if (!projects || !page) {
    return {
      notFound: true,
    }
  }
  projects.page = page
  return {
    props: { projects }
  }
}