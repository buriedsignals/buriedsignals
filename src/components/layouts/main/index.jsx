// Styles
import { useRouter } from "next/router";
import { MainStyle } from "./index.style"
// React
import { useEffect, useState } from "react"

export default function Main({ children, ...props }) {
  // Router
  const router = useRouter()
  // States
  const [show, setShow] = useState(false)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      setShow(true)
    }, 500);
  }, [])
  return (
    <MainStyle className={ `main ${ show ? "is-show" : "" }` } { ...props }>
      { children }
    </MainStyle>
  )
}