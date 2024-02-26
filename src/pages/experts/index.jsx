// Middlewares
import { getPageExperts } from '@/middlewares/librairies/pages/experts';
import { getUsersExperts } from '@/middlewares/librairies/users/member';
// Templates
import ExpertsTemplate from "@/components/templates/Experts"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO'

export default function Experts({ experts, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ experts.page.meta } />
      <ExpertsTemplate experts={ experts } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const experts = await getUsersExperts(query)
  const page = await getPageExperts()
  if (!experts || !page) {
    return {
      notFound: true,
    }
  }
  experts.page = page
  return {
    props: { experts }
  }
}