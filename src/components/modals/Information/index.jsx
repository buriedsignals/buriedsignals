// Styles
import { InformationStyle } from "./index.style"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Banners
import InformationBanner from "@/components/banners/Information"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import InformationIcon from "@/components/icons/Information"



export default function Information({ information, ...props }) {
  // Refernces 
  const panelRef = useRef()
  // Hooks
  const [modal, setModal] = useToggle(false)
  const isBreakpointMd = useBreakpoint(down('sm'))
  // Effects
  useEffect(() => {
    if (isBreakpointMd) {
      useStore.setState({ scroll: !modal })
    }
  }, [modal])
  // Handlers
  const onClickButtonInformation = () => {
    setModal(!modal)
    if (isBreakpointMd) {
      window.scrollTo(0, 0)
    }
  }
  const onMouseEnterButtonInformation = () => {
    setModal(true)
    if (isBreakpointMd) {
      window.scrollTo(0, 0)
    }
  }
  const onMouseLeaveButtonInformation = () => {
    setModal(false)
    if (isBreakpointMd) {
      window.scrollTo(0, 0)
    }
  }
  const onClickButtonClose = () => {
    setModal(false)
  }
  return (
    <InformationStyle { ...props }>
      <div className={ `modal${ modal ? ' is-open' : '' }` }></div>
      <button className={ `modal${ modal ? ' is-open' : '' }` } onClick={ onClickButtonInformation } onMouseEnter={ onMouseEnterButtonInformation } onMouseLeave={ onMouseLeaveButtonInformation }>
        <InformationIcon />
      </button>
      { modal && 
        <InformationBanner information={ information } onClickButtonClose={ onClickButtonClose } />
      }
    </InformationStyle>
  )
}