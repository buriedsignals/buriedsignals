// Middlewares
import { getPageJury } from '@/middlewares/librairies/pages/jury';
import { getUsersJury } from '@/middlewares/librairies/users/jury';
// Templates
import JuryTemplate from "@/components/templates/About/Jury"

export default function Jury({ jury, ...props }) {
  return (
    <JuryTemplate jury={ jury } />
  )
}

export async function getStaticProps(context) {
  const jury = await getUsersJury()
  const page = await getPageJury()
  if (!page || !jury) {
    return {
      notFound: true,
    }
  }
  jury.page = page
  return {
    props: { jury },
    revalidate: 1
  }
}