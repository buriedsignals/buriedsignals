// Next
import Head from 'next/head'
// Middlewares
import { getPageStudio } from '@/middlewares/librairies/pages/studio';
import { getPostsProjects } from '@/middlewares/librairies/posts/projects';
// Templates
import StudioTemplate from "@/components/templates/About/Studio"

// Metas
const title = 'Buried Signals Studio'
const description = "A film and interactive design studio specializing in information and narrative design. Creating clarity in complexity."
const url = 'https://www.buriedsignals.com/'
const image = url + 'images/img-meta-studio.jpeg'

export default function Studio({ studio, projects, ...props }) {
  return (
    <>
      <Head>        
        <title key='title'>{ title }</title>
        <meta key='description' name='description' content={ description } />
        <meta key='og-title' property='og:title' content={ title } />
        <meta key='og-description' property='og:description' content={ description } />
        <meta key='og-image' property='og:image' content={ image } />
        <meta key='tw-title' name='twitter:title' content={ title } />
        <meta key='tw-description' name='twitter:description' content={ description } />
        <meta key='tw-image' name='twitter:image:src' content={ image } />
      </Head>
      <StudioTemplate studio={ studio } projects={ projects } />
    </>
  )
}

export async function getStaticProps(context) {
  const studio = await getPageStudio()
  const projects = await getPostsProjects()
  if (!studio) {
    return {
      notFound: true,
    }
  }
  return {
    props: { studio: studio, projects: projects },
    revalidate: 1
  }
}