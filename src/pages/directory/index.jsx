// Middlewares
import { getPageDirectory } from '@/middlewares/librairies/pages/directory';
import { getUsersDirectory } from '@/middlewares/librairies/users/member';
// Templates
import DirectoryTemplate from "@/components/templates/Directory"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO'

export default function Directory({ directory, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ directory.page.meta } />
      <DirectoryTemplate directory={ directory } />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const directory = await getUsersDirectory(query)
  const page = await getPageDirectory()
  if (!directory || !page) {
    return {
      notFound: true,
    }
  }
  directory.page = page
  return {
    props: { directory }
  }
}