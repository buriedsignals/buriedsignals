// Styles
import { PortfolioStyle } from "./index.style"

export default function Portfolio({ size = null, ...props }) {
  return (
    <PortfolioStyle { ...props } width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.94825 18C11.9043 18 13.4899 14.2974 13.4899 9.73003C13.4899 5.16264 11.9043 1.46005 9.94825 1.46005C7.99225 1.46005 6.40659 5.16264 6.40659 9.73003C6.40659 14.2974 7.99225 18 9.94825 18ZM9.94825 18C14.6427 18 18.4482 14.1947 18.4482 9.50019M9.94825 18C5.25383 18 1.44824 14.1947 1.44824 9.50019M18.4482 9.50019C18.4482 4.80566 14.6427 1 9.94824 1C5.25382 1 1.44824 4.80566 1.44824 9.50019M18.4482 9.50019H1.44824" strokeWidth="1.5" strokeLinecap="round"/>
    </PortfolioStyle>
  )
}