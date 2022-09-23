import { down } from "styled-breakpoints";
import styled from "styled-components";

export const ValidateEmailStyle = styled.div`
  position: fixed;
  z-index: 2;
  .panel-validate-email {
    position: fixed;
    top: 50%; left: 50%;
    width: 100%;
    max-width: 860px;
    background: var(--color-green);
    border-radius: 4px;
    transform: translate3D(-50%, -50%, 0);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    ${down('md')} {
      top: 66px; left: 0;
      max-width: inherit;
      height: calc(100vh - 66px);
      border-radius: 0;
      transform: inherit;
    }
    .panel-validate-email-container {
      position: sticky;
      max-width: 470px;
      margin: 0 auto;
      padding: 64px 25px;
      ${down('md')} {
        padding: 25px;
      }
      h3 {
        margin-bottom: 27.5px;
        text-align: center;
        color: var(--color-black02);
      }
      .description {
        margin-bottom: 37.5px;
        text-align: center;
        color: var(--color-black02);
      }
      .buttons-container {
        display: flex;
        justify-content: center;
        button {
          min-width: 140px;
          &:not(:first-child) {
            margin-left: 40px;
          }
          p {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }   
`