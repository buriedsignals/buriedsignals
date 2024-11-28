// Styles
import { LogoStyle } from "./index.style"

export default function Logo({ type, ...props }) {
  return (
    <LogoStyle { ...props } width="37" height="30" viewBox="0 0 74 54">
      <path d="M14.0479 27.8563L14.0479 13.0285L40.2186 48.3531L29.2396 48.353L14.0479 27.8563Z" fill="#6AE0AD"/>
      <path d="M59.4099 26.647L59.4099 41.0423L33.1924 5.92286L44.024 5.92287L59.4099 26.647Z" fill="#408466"/>
      <path d="M57.6899 48.3519L46.859 48.3519L15.3583 5.91797L26.1377 5.91797L57.6899 48.3519Z" fill="#5AC496"/>
      <rect y="5.92419" width="8.70693" height="42.4157" fill="#71F2BA"/>
      <rect x="64.7485" y="5.92419" width="8.70693" height="42.4157" fill="#377A5D"/>
    </LogoStyle>
  )
}