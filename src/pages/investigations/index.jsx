// Middlewares
import { getPageInvestigations } from '@/middlewares/librairies/pages/investigations';
import { getPostsInvestigations } from '@/middlewares/librairies/posts/investigations';
// Templates
import InvestigationsTemplate from "@/components/templates/Investigations"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Investigations({ investigations, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ investigations.meta } />
      <InvestigationsTemplate investigations={ investigations } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const investigations = await getPostsInvestigations(query)  
  const page = await getPageInvestigations()
  if (!investigations || !page) {
    return {
      notFound: true,
    }
  }
  investigations.page = page
  return {
    props: { investigations }
  }
}