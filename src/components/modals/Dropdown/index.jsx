// Styles
import { DropdownStyle } from "./index.style"
// Next
import Link from "next/link"
// Hooks
import useToggle from "@/hooks/useToggle"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function Dropdown({ buttonName = "", listActions = [], isActive = false, ...props }) {
  // Hooks
  const [modal, setModal] = useToggle(false) 
  return (
    <DropdownStyle { ...props } onMouseEnter={ () => setModal(true) } onMouseLeave={ () => setModal(false) }>
      <button className={ `modal${ modal ? ' is-open' : '' } ${ isActive ? "is-active" : "" }` } onClick={ () => setModal(false) }>
        <p className="typography-01">{ buttonName }</p>
        <ArrowIcon />
      </button>
      { modal && 
        <div className="panel">
          <ul className="links">
            { listActions.map((itemAction, index) => {
                return <li key={ `item-${index}` } className="link" onClick={ () => setModal(false) }>
                  { itemAction }
                </li>
            }) }
          </ul>
        </div>
     }
    </DropdownStyle>
  )
}