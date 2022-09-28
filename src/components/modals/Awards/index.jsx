// Styles
import { AwardsStyle } from "./index.style"
// Hooks
import useToggle from "@/hooks/useToggle"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function Awards({ buttonName = "", listActions = [], ...props }) {
  // Hooks
  const [modal, setModal] = useToggle(false) 
  return (
    <AwardsStyle { ...props } onMouseEnter={ () => setModal(true) } onMouseLeave={ () => setModal(false) }>
      <button className={ `modal${ modal ? ' is-open' : '' }` } onClick={ () => setModal(false) }>
        <p className="typography-03">{ buttonName }</p>
        <ArrowIcon />
      </button>
      { modal && 
        <div className="panel">
          <ul className="awards">
            { listActions.map((itemAction, index) => {
                return <li key={ `item-${index}` } className="award" onClick={ () => setModal(false) }>
                  { itemAction }
                </li>
            }) }
          </ul>
        </div>
     }
    </AwardsStyle>
  )
}