// Middlewares
import { getPageJury } from '@/middlewares/librairies/pages/jury';
import { getUsersJury } from '@/middlewares/librairies/users/jury';
// Next
import Head from 'next/head'
// Templates
import MembershipTemplate from "@/components/templates/About/Jury"

export default function Membership({ membership, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Membership</title>
      </Head>
      <MembershipTemplate jury={ membership } />
    </>
  )
}

export async function getStaticProps(context) {
  const membership = await getUsersJury()
  const page = await getPageJury()
  if (!page || !membership) {
    return {
      notFound: true,
    }
  }
  membership.page = page
  return {
    props: { membership },
    revalidate: 1
  }
}