// Styles
import { HeaderStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react";
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import HeaderDesktop from "@/components/modules/Header/Desktop"
import HeaderMobile from "@/components/modules/Header/Mobile"

export default function Header() {
  // References
  const lastScroll = useRef(0)
  // States
  const [show, setShow] = useState(false)
  const [stick, setStick] = useState(true)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500);
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  // Handlers
  const onScroll = () => {
    if (lastScroll.current > window.pageYOffset || window.pageYOffset == 0) {
      setStick(true)
    } else {
      setStick(false)
    }
    lastScroll.current = window.pageYOffset
  }
  return (
    <HeaderStyle className={ `header ${ show ? "is-show" : "" } ${ stick ? "is-stick" : "" }` }>
      { useBreakpoint(down('md')) ?
          <HeaderMobile />
        : 
          <HeaderDesktop />
      }
    </HeaderStyle>
  )
}