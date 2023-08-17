// Styles
import { DropdownStyle } from "./index.style"
// Next
import Link from "next/link"
// Hooks
import useToggle from "@/hooks/useToggle"
// Icons
import ArrowIcon from "@/components/icons/Arrow"
import { useEffect } from "react"

export default function Dropdown({ buttonName = "", listActions = [], isActive = false, setDropdown, ...props }) {
  // Hooks
  const [modal, setModal] = useToggle(false) 
  // Effects
  useEffect(() => {
    if (modal || isActive) {
      setDropdown(true)
    } else {
      setDropdown(false)
    }
  }, [modal])
  // Handlers
  const handleHover = () => {
    setModal(!modal)
  }
  return (
    <DropdownStyle { ...props } onMouseEnter={ () => setModal(true) } onMouseLeave={ () => setModal(false) }>
      <Link href="/">
        <a className={ `modal${ modal ? ' is-open' : '' } ${ isActive ? "is-active" : "" }` } onMouseEnter={ handleHover }>
          <p className="typography-01">{ buttonName }</p>
        </a>
      </Link>
    </DropdownStyle>
  )
}