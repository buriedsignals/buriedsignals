// Styles
import { PrimaryStyle } from "./index.style"
// React
import { useEffect } from "react";

export default function Primary({ color = "green", onClickButton = () => {}, waiting = false, children, ...props }) {
  // Effects
  useEffect(() => {
    if (waiting) {
      document.body.classList.add('is-waiting');
    } else {
      document.body.classList.remove('is-waiting');
    }
  }, [waiting])
  return (
    <PrimaryStyle color={ waiting ? "waiting" : color } onClick={ onClickButton } { ...props }>
      { waiting ? (() => {
        const newChildren = {...children}
        const newProps = {}
        newProps.children = "waiting..."
        newProps.className = children.props.className
        newChildren.props = newProps
        return newChildren
      })() : children }
    </PrimaryStyle>
  )
}