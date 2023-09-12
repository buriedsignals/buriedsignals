// Next
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function HeadSEO({ meta, ...props }) {
  const router = useRouter()
  return (
    <>
      <Head>
        { meta.title && <title key='title'>{ meta.title }</title> }
        { meta.description && <meta key='description' name='description' content={ meta.description } /> }
        { meta.keywords && <meta name='keywords' content={ meta.keywords } /> }
        { meta.title && <meta itemProp="name" content={ meta.title } /> }
        { meta.description && <meta itemProp="description" content={ meta.description } /> }
        { meta.keywords && <meta itemProp='keywords' content={ meta.keywords } /> }
        { meta.image && <meta itemProp="image" content={ meta.image.url } /> }
        { meta.title && <meta key='og-title' property='og:title' content={ meta.title } /> }
        { meta.image && <meta key='og-image' property='og:image' content={ meta.image.url } /> }
        { meta.description && <meta key='og-description' property='og:description' content={ meta.description } /> }
        { meta.title && <meta key='tw-title' name='twitter:title' content={ meta.title } /> }
        { meta.description && <meta key='tw-description' name='twitter:description' content={ meta.description } /> }
        { meta.image && <meta key='tw-image' name='twitter:image:src' content={ meta.image.url } /> }
        <meta key='og-url' property='og:url' content={ "https://buriedsignals.com" + router.asPath } />
        <link rel="canonical" href={ "https://buriedsignals.com" + (router.pathname.replace(/\[[^\]]+\]/g, "") + (router.query.slug ? router.query.slug : "" )) } />
      </Head>
    </>
  )
}