// Middlewares
// import { getPageDirectory } from '@/middlewares/librairies/pages/directories';
// import { getPostsDirectories } from '@/middlewares/librairies/posts/directories';
// Next
import Head from 'next/head'
// Templates
// import DirectoryTemplate from "@/components/templates/Directory"

export default function Directory({ directory, ...props }) {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Directory</title>
      </Head>
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