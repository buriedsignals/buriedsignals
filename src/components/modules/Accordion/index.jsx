// Styles
import { AccordionStyle } from "./index.style"
// React
import { useState } from "react"
// Modules
import PostsListModule from "@/components/modules/PostsList"

export default function Accordion({ panels, ...props }) {
  // States
  const [panelSelected, setPanelSelected] = useState(Object.keys(panels)[0])
  // Handlers
  const onClickButton = (panel) => {
    setPanelSelected(panel)
  }
  return (
    <AccordionStyle { ...props }>
      <div className="accordion-container">
        <div className="container-module-large select-container">
          { Object.keys(panels).map((key) => (
            <button key={ `panel-${key}` } className={ key == panelSelected ? 'is-active' : '' } onClick={ () => onClickButton(key) } >
              <p className="typography-05">{ key }</p>
            </button>
          )) }
        </div>
        <div className="panel-container">
          <PostsListModule type={ panelSelected.slice(0, -1) } posts={ panels[panelSelected] } />
        </div>
      </div>
    </AccordionStyle>
  )
}