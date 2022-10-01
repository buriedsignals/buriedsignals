// Middlewares
import { getUsersMembers, getUserMember } from '@/middlewares/librairies/users/member';
// Templates
import ProfileTemplate from "@/components/templates/Profiles/Profile"
import useArray from '@/hooks/useArray';
import { useEffect } from 'react';

export default function Profile({ member }) {
  return (
    <ProfileTemplate member={ member } />
  )
}

export async function getStaticPaths() {
  const members = await getUsersMembers()
  const paths = members.users.filter((member) => member.slug !== null).map((member) => ({
    params: { slug: member.slug },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({params, ...context}) {
  const member = await getUserMember(params.slug)
  if (!member) {
    return {
      notFound: true,
    }
  }
  return {
    props: { member },
    revalidate: 1
  }
}