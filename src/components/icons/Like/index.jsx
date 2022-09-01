// Styles
import { LikeStyle } from "./index.style"

export default function Like({ ...props }) {
  return (
    <LikeStyle { ...props } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.8933 3.07333C13.2056 2.38532 12.2728 1.99878 11.3 1.99878C10.3272 1.99878 9.39435 2.38532 8.70666 3.07333L8 3.78L7.29333 3.07333C5.86107 1.64107 3.53892 1.64107 2.10666 3.07333C0.674406 4.50559 0.674406 6.82774 2.10666 8.26L2.81333 8.96666L8 14.1533L13.1867 8.96666L13.8933 8.26C14.5813 7.57231 14.9679 6.63942 14.9679 5.66666C14.9679 4.6939 14.5813 3.76101 13.8933 3.07333Z" strokeWidth="1.65647" strokeLinecap="round" strokeLinejoin="round"/>
    </LikeStyle>
  )
}