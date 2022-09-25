// Styles
import { MainStyle } from "./index.style"
// React
import { useEffect, useState } from "react"

export default function Main({ children, ...props }) {
  // States
  const [show, setShow] = useState(false)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500);
  }, [])
  return (
    <MainStyle className={ `main ${ show ? "is-show" : "" }` } { ...props }>
      { children }
    </MainStyle>
  )
}