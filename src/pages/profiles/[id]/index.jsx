// Middlewares
import { getUsersMembers, getUserMember } from '@/middlewares/librairies/users/member';
// Templates
import ProfileTemplate from "@/components/templates/Profiles/Profile"

export default function Profile({ member }) {
  console.log(member)
  return (
    <ProfileTemplate member={ member } />
  )
}

export async function getStaticPaths() {
  const members = await getUsersMembers()
  console.log(members)
  const paths = members.users.map((member) => ({
    params: { id: member.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({params, ...context}) {
  const member = await getUserMember(params.id)
  if (!member) {
    return {
      notFound: true,
    }
  }
  return {
    props: { member }
  }
}