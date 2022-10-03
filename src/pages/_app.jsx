// Styles
import '@/styles/globals.css'
// React
import { useEffect, useRef } from 'react';
// Next
import Head from 'next/head'
import { useRouter } from "next/router"
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
  });
  // Hooks
  const [scroll] = useStore((state) => [state.scroll])
  // Effects
  useEffect(() => {
    document.body.className = !scroll ? 'no-scroll' : '';
  })
  // ---
  const router = useRouter();
  useEffect(() => storePathValues, [router.asPath]);
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);
  }
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
        <meta key='og-title' property='og:title' content={ title } />
        <meta property='og:type' content='site' />
        <meta property='og:url' content={ url } />
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
    </>
  )
}

export default App
