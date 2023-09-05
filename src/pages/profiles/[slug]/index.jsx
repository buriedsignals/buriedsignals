// Middlewares
import { getUserMember } from '@/middlewares/librairies/users/member';
// Hooks
import useArray from '@/hooks/useArray';
// Templates
import ProfileTemplate from "@/components/templates/Profiles/Profile"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Profile({ member }) {
  return (
    <>
      <HeadSEOModule meta={ member.meta } />
      <ProfileTemplate member={ member } />
    </>
  )
}

export async function getServerSideProps({params, ...context}) {
  const member = await getUserMember(params.slug)
  if (!member) {
    return {
      notFound: true,
    }
  }
  return {
    props: { member }
  }
}