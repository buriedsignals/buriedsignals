// Styles
import '@/styles/globals.css'
// React
import { useEffect, useRef } from 'react';
// Next
import Head from 'next/head'
import { useRouter } from "next/router"
import Script from 'next/script'
// Nodes
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
// Hooks
import useStore from '@/hooks/useStore'
import Layout from '@/components/layouts';

// Metas
const title = 'Buried Signals'
const url = 'https://www.buriedsignals.com/'
const description = "Discover the world's best visual narratives. Inspiration, insights and resources for interactive storytelling."
const keywords = 'dataviz, information, design, visualisation, narrative, interactive, visual, journalism, awards, resources, insights, courses, community, data'
const author = 'Buried Signals'
const image = url + 'images/img-meta.png'

function App({ Component, pageProps }) {
  // Nodes
  const breakpoints = createTheme({
    sm: "440px",
    md: "905px",
    lg: "1175px",
    xl: "1440px",
    list: "1078px",
    talents: "650px",
  });
  // Hooks
  const [scroll] = useStore((state) => [state.scroll])
  // Effects
  useEffect(() => {
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    const isChrome = /Google Inc/.test(navigator.vendor) || navigator.userAgent.match('CriOS')
    const className = `${ !scroll ? 'no-scroll' : '' } ${ isSafari ? 'is-safari' : '' } ${ isChrome ? 'is-chrome' : '' }`
    document.body.className = className
  })
  // ---
  const router = useRouter();
  useEffect(() => {
    return () => {
      useStore.setState({ previousPath: router.asPath })
    }
  }, [router.asPath]);
  // ---
  return (
    <>      
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={ author } />
        <meta name='designer' content={ author } />
        <meta name='publisher' content={ author } />
        <title key='title'>{ title }</title>
        <meta key='description' name='description' content={ description } />
        <meta name='keywords' content={ keywords } />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        <meta itemProp="name" content={ title } />
        <meta itemProp="description" content={ description } />
        <meta itemProp='keywords' content={ keywords } />
        <meta itemProp="image" content={ image } />
        <meta key='og-title' property='og:title' content={ title } />
        <meta property='og:type' content='site' />
        <meta key='og-url' property='og:url' content={ url } />
        <meta key='og-image' property='og:image' content={ image } />
        <meta property='og:site_name' content={ title } />
        <meta key='og-description' property='og:description' content={ description } />
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0, user-scalable=no' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@buriedsignals' />
        <meta key='tw-title' name='twitter:title' content={ title } />
        <meta key='tw-description' name='twitter:description' content={ description } />
        <meta name='twitter:creator' content='@buriedsignals' />
        <meta key='tw-image' name='twitter:image:src' content={ image } />
      </Head>
      <ThemeProvider theme={ breakpoints }>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </ThemeProvider>
      <Script id="piwik-analytics" strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(window, document, dataLayerName, id) {
            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
            tags.async=!0,tags.src="https://buriedsignals.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
            })(window, document, 'dataLayer', 'ed39813c-43d8-43b1-98be-3a66685a91b6');
          `,
        }}
      />
    </>
  )
}

export default App
