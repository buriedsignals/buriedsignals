// Styles
import '@/styles/globals.css'
// React
import { useEffect } from 'react';
// Next
import Head from 'next/head'
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
const description = 'A creative production studio crafting explorable essays, visual reports and immersive documentaries'
const keywords = ''
const author = 'Buried Signals'

function App({ Component, pageProps }) {
  // Nodes
  const breakpoints = createTheme({
    sm: "440px",
    md: "905px",
    lg: "1175px",
    xl: "1440px",
  });
  // Hooks
  const [scroll] = useStore((state) => [state.scroll])
  // Effects
  useEffect(() => {
    document.body.className = !scroll ? 'no-scroll' : '';
  })
  return (
    <>      
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={ author } />
        <meta name='designer' content={ author } />
        <meta name='publisher' content={ author } />
        <title>{ title }</title>
        <meta name='description' content={ description } />
        <meta name='keywords' content={ keywords } />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        <meta property='og:title' content={ title } />
        <meta property='og:type' content='site' />
        <meta property='og:url' content={ url } />
        <meta property='og:image' content={ url + 'images/img-meta.png' } />
        <meta property='og:site_name' content={ title } />
        <meta property='og:description' content={ description } />
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0, user-scalable=no' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@buriedsignals' />
        <meta name='twitter:title' content={ title } />
        <meta name='twitter:description' content={ description } />
        <meta name='twitter:creator' content='@buriedsignals' />
        <meta name='twitter:image:src' content={ url +'images/img-meta.png' } />
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
