// Styles
import { HeaderStyle } from "./index.style"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import HeaderDesktop from "@/components/modules/Header/Desktop"
import HeaderMobile from "@/components/modules/Header/Mobile"

export default function Header() {
  return (
    <HeaderStyle>
      { useBreakpoint(down('md')) ?
          <HeaderMobile />
        : 
          <HeaderDesktop />
      }
    </HeaderStyle>
  )
}