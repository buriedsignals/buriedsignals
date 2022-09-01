// Styles
import { LayoutStyle } from "./index.style"
// Modules
import HeaderModule from "@/components/modules/Header"
import FooterModule from "@/components/modules/Footer"


export default function Layout({ children, ...props }) {
  return (
    <LayoutStyle { ...props }>
      <HeaderModule />
      { children }
      <FooterModule />
    </LayoutStyle>
  )
}