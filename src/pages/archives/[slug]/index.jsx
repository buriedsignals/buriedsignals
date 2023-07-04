// Middlewares
import { getPostsSpotlightsArchives, getPostSpotlightArchive } from '@/middlewares/librairies/posts/spotlights';
// Next
import Head from 'next/head'
import Script from "next/script"
// Templates
import ArchiveTemplate from '@/components/templates/Archives/Archive';
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO';

export default function Archive({ archive, ...props }) {
  return (
    <>
      <HeadSEOModule meta={ archive.meta } />
      <Script src="https://cdn.jsdelivr.net/npm/replaywebpage@1.7.13/ui.js" strategy="beforeInteractive" />
      <ArchiveTemplate archive={ archive } />
    </>
  )
}

export async function getStaticPaths() {
  const archives = await getPostsSpotlightsArchives()
  const paths = archives.posts.filter((post) => post.slug !== null).map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: "blocking" }
}

export async function getStaticProps({params, ...context}) {
  const archive = await getPostSpotlightArchive(params.slug)
  if (!archive) {
    return {
      notFound: true,
    }
  }
  return {
    props: { archive },
    revalidate: 1
  }
}

// export async function getStaticPaths() {
//   const archives = {
//     page: {
//       title: "Archives",
//       description: "Test with webrecorder",
//       slug: "archives"
//     },
//     posts: [
//       {
//         id: "0",
//         slug: "test01",
//         title: "Test 01",
//         fileName: "archive-01.wacz",
//         url: "https://restofworld.org/2022/blackouts/"
//       },
//       {
//         id: "1",
//         slug: "test02",
//         title: "Test 02",
//         fileName: "archive-02.wacz",
//         url: "https://restofworld.org/2022/blackouts/"
//       }
//     ]
//   }
//   const paths = archives.posts.filter((post) => post.slug !== null).map((post) => ({
//     params: { slug: post.slug },
//   }))
//   return { paths, fallback: "blocking" }
// }

// export async function getStaticProps({params, ...context}) {
//   const archive = params.slug == "test01" ? {
//     id: "0",
//     slug: "test01",
//     title: "Test 01",
//     fileName: "archive-01.wacz",
//     url: "https://restofworld.org/2022/blackouts/"
//   } : {
//     id: "1",
//     slug: "test02",
//     title: "Test 02",
//     fileName: "archive-02.wacz",
//     url: "https://www.grid.news/story/global/2023/02/22/interactive-ukraine-one-year-at-war-a-timeline-of-the-brutal-conflict/"
//   }
//   return {
//     props: { archive },
//     revalidate: 1
//   }
// }