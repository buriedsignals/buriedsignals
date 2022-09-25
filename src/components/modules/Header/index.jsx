// Styles
import { HeaderStyle } from "./index.style"
// React
import { useEffect, useState } from "react";
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import HeaderDesktop from "@/components/modules/Header/Desktop"
import HeaderMobile from "@/components/modules/Header/Mobile"

export default function Header() {
  // States
  const [show, setShow] = useState(false)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500);
  }, [])
  return (
    <HeaderStyle className={ `header ${ show ? "is-show" : "" }` }>
      { useBreakpoint(down('md')) ?
          <HeaderMobile />
        : 
          <HeaderDesktop />
      }
    </HeaderStyle>
  )
}