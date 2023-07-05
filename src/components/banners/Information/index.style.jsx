import { down } from "styled-breakpoints";
import styled from "styled-components";

export const InformationStyle = styled.div`
  // position: fixed;
  position: absolute;
  top: calc(50% - 6px); right: calc(-50% + 62.5px);
  width: 100%;
  height: 100%;
  transform: translate3D(-50%, -50%, 0);
  z-index: 2;
  ${down('sm')} {
    position: fixed;
    top: inherit; right: inherit;
    width: inherit;
    height: inherit;
    transform: inherit;
  }
  .panel-information {
    position: absolute;
    bottom: 100%; left: 0;
    width: 250px;
    background: var(--color-black02);
    border-radius: 4px;
    ${down('sm')} {
      position: fixed;
      top: 50vh; left: 0;
      bottom: inherit; right: inherit;
      max-width: inherit;
      width: calc(100% - 32px);
      // height: calc(100vh - 66px);
      margin: 0 16px;
      transform: translate3D(0, -50%, 0);
    }
    .panel-information-container {
      position: sticky;
      max-width: 470px;
      margin: 0 auto;
      padding: 12px 16px;
      ${down('sm')} {
        padding: 25px;
      }
      h3 {
        margin-bottom: 6px;
        color: var(--color-grey01);
        text-transform: uppercase;
        ${down('sm')} {
          margin-bottom: 10px;
        }
      }
      .description {
        max-height: 95px;
        text-transform: none;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        ${down('sm')} {
          max-height: 50vh;
          margin-bottom: 37.5px;
        }
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