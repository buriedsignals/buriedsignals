// Middlewares
import { getUsersMembers, getUserMember } from '@/middlewares/librairies/users/member';
// React
import { useEffect } from 'react';
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

export async function getStaticPaths() {
  const members = await getUsersMembers()
  const paths = members.users.filter((member) => member.slug !== null).map((member) => ({
    params: { slug: member.slug },
  }))
  return { paths, fallback: "blocking" }
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