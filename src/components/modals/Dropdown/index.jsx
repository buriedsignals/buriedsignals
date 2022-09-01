// Styles
import { DropdownStyle } from "./index.style"
// Next
import Link from "next/link"
// Hooks
import useToggle from "@/hooks/useToggle"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function Dropdown({ buttonName = "", listActions = [], ...props }) {
  // Hooks
  const [modal, setModal] = useToggle(false) 
  return (
    <DropdownStyle { ...props }>
      <button className={ `modal${ modal ? ' is-open' : '' }` } onClick={ setModal }>
        <ArrowIcon />
        <p className="typography-01">{ buttonName }</p>
      </button>
      { modal && 
        <div className="panel">
          <ul className="links" onClick={ setModal }>
            { listActions.map((itemAction, index) => {
                return <li key={ `item-${index}` } className="link">
                  { itemAction }
                </li>
            }) }
          </ul>
        </div>
     }
    </DropdownStyle>
  )
}