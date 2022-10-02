import { down } from "styled-breakpoints";
import styled from "styled-components";

export const ErrorStyle = styled.div`
  position: fixed;
  z-index: 2;
  .panel-error {
    position: fixed;
    top: 50%; left: 50%;
    width: 100%;
    max-width: 860px;
    background: var(--color-black02);
    border-radius: 4px;
    transform: translate3D(-50%, -50%, 0);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    ${down('md')} {
      top: 50vh; left: 0;
      max-width: inherit;
      width: calc(100% - 32px);
      // height: calc(100vh - 66px);
      margin: 0 16px;
      transform: translate3D(0, -50%, 0);
    }
    .panel-error-container {
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
        text-transform: none;
      }
      .description {
        margin-bottom: 37.5px;
        text-align: center;
        text-transform: none;
      }
      .inputs-container {
        margin-bottom: 32.5px;
        .input-container {
          display: flex;
          padding: 10px;
          background-color: var(--color-black03);
          border: 1.25px solid var(--color-grey01);
          border-radius: 5px;
          &:not(:first-child) {
            margin-top: 20px;
          }
          .icon-container {
            display: inline-block;
            padding: 5px;
            border: 1px solid var(--color-grey01);
            border-radius: 5px;
            svg {
              display: flex;
            }
          }
          input {
            width: 100%;
            margin-left: 22.5px;
            background-color: inherit;
            border: none;
            color: var(--color-white);
            outline: none;
          }
        }
      }
      .group-container {
        margin-bottom: 32.5px;
        label {
          display: block;
          margin-bottom: 12.5px;
        }
        textarea {
          width: 100%;
          padding: 10px;
          background-color: var(--color-black03);
          border: 1.25px solid var(--color-grey01);
          border-radius: 5px;
          color: var(--color-white);
          outline: none;
          resize : none;
          -ms-overflow-style: none;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
        }
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