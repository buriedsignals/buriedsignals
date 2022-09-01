// Styles
import '@/styles/globals.css'
// React
import { useEffect } from 'react';
// Nodes
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
// Hooks
import useStore from '@/hooks/useStore'

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
      <ThemeProvider theme={ breakpoints }>
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  )
}

export default App
