// Styles
import { CrossStyle } from "./index.style"

export default function Cross({ ...props }) {
  return (
    <CrossStyle { ...props } width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.00049" y="23" width="28" height="2" transform="rotate(-45 3.00049 23)"/>
      <rect width="28" height="2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.2134 22.7988)"/>
    </CrossStyle>
  )
}