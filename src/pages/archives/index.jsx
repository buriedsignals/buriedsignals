// Middlewares
// import { getPageArchives } from '@/middlewares/librairies/pages/archives';
// import { getPostsArchives } from '@/middlewares/librairies/posts/archives';
// Templates
import ArchivesTemplate from "@/components/templates/Archives"

export default function Archives({ archives, ...props }) {
  return (
    <ArchivesTemplate archives={ archives } />
  )
}

export async function getStaticProps(context) {
  const archives = {
    page: {
      title: "Archives",
      description: "Test with webrecorder",
      slug: "archives"
    },
    posts: [
      {
        id: "0",
        slug: "test01",
        title: "Test 01",
        path: "./wacz/archive-01.wacz",
        url: "https://restofworld.org/2022/blackouts/"
      },
      {
        id: "1",
        slug: "test02",
        title: "Test 02",
        path: "./wacz/archive-02.wacz",
        url: "https://restofworld.org/2022/blackouts/"
      }
    ]
  }
  return {
    props: { archives },
    revalidate: 1
  }
}