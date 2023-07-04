// Middlewares
// import { getPageDirectory } from '@/middlewares/librairies/pages/directories';
// import { getPostsDirectories } from '@/middlewares/librairies/posts/directories';
// Templates
// import DirectoryTemplate from "@/components/templates/Directory"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO'

export default function Directory({ directory, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ directory.page.meta } />
      {/* <DirectoryTemplate Directory={ directory } /> */}
    </>
  )
}

export async function getStaticProps(context) {
  const directory = null //await getPostsDirectories()
  const page = null //await getPageDirectory()
  if (!directory || !page) {
    return {
      notFound: true,
    }
  }
  directory.page = page
  return {
    props: { directory },
    revalidate: 1
  }
}