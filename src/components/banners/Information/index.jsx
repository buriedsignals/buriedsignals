// Styles
import { InformationStyle } from "./index.style"
// React
import { useRef } from "react"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Buttons
import PrimaryButton from "@/components/buttons/Primary"


export default function Information({ information, onClickButtonClose, ...props }) {
  // Refernces 
  const panelRef = useRef()
  //
  return (
    <InformationStyle { ...props }>
      <div ref={ panelRef } className="panel-information">
        <div className="panel-information-container">
          <h3 className={ `typography-${ useBreakpoint(down('sm')) ? "06" : "03" }` }>Details</h3>
          <p className={ `typography-${ useBreakpoint(down('sm')) ? "07" : "21" } description` }>{ information }</p>
          { useBreakpoint(down('sm')) && <>
            <div className="buttons-container">
              <PrimaryButton color="black03" onClickButton={ (e) => { 
                e.preventDefault()
                onClickButtonClose(false)
              } }>
                <p className="typography-03">Close</p>
              </PrimaryButton>
            </div>
          </> }
        </div>
      </div>
    </InformationStyle>
  )
}