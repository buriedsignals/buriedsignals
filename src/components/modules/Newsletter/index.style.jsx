import styled from "styled-components";
import { down } from "styled-breakpoints";

export const NewsletterStyle = styled.div`
  ${down('md')} {
    padding: 0 16px;
  }
  .newsletter-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
    background-color: var(--color-green);
    &::after {
      position: absolute;
      bottom: -1px; right: -1px;
      content: '';
      display : inline-block;
      height : 0;
      width : 0;
      border-bottom : 35px solid var(--color-black01);
      border-left : 35px solid transparent;
    }
    .logo {
      margin-bottom: 37.5px;
      svg {
        width: 69.15px;
        height: 55.43px;
        path {
          fill: var(--color-black02);
        }
      }
    }
    .details {
      max-width: 700px;
      margin-bottom: 37.5px;
      color: var(--color-black02);
      text-align: center;
    }
    input {
      width: 327px;
      margin-bottom: 32px;
      padding: 27.5px;
      background-color: var(--color-white);
      background-image: none;
      border: inherit;
      box-shadow: none;
      color: var(--color-black02);
      text-align: center;
      outline: none;
      ::placeholder {
        color: var(--color-black02);
      }
    }
  }
`