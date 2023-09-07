// Middlewares
import { getExpertisesMembers } from '@/middlewares/librairies/users/member';
// Templates
import SignupTemplate from "@/components/templates/Profiles/Signup"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO'

export default function Signup({ categories, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ {
        title: "Buried Signals - Sign up"
      } } />
      <SignupTemplate categories={ categories } />
    </>
  )
}

export async function getStaticProps(context) {
  const categories = await getExpertisesMembers()
  if (!categories) {
    return {
      notFound: true,
    }
  }
  return {
    props: { categories },
    revalidate: 1
  }
}