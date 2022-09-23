import { down } from "styled-breakpoints";
import styled from "styled-components";

export const EditStyle = styled.div`
  position: relative;
  z-index: 2;
  .modal {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      margin-right: 7.5px;
      transition: all 0.05s ease-in-out;
    }
    &.is-open {
      svg {
        transform: rotate3D(0, 0, 1, -180deg);
        transition: all 0.05s ease-in-out;
      }
    }
  }
  .panel-back {
    position: fixed;
    top: 71px; left: 0;
    display: block;
    width: 100vw;
    height: calc(100vh - 71px);
    background: var(--color-black01);
    opacity: 0.5;
    z-index: -1;
  }
  .panel-edit {
    position: fixed;
    top: 50%; left: 50%;
    width: 100%;
    max-width: 860px;
    background: var(--color-black01);
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
    .panel-edit-container {
      position: sticky;
      max-width: 470px;
      margin: 0 auto;
      padding: 64px 25px;
      ${down('md')} {
        padding: 25px;
      }
      h3 {
        margin-bottom: 37.5px;
        text-align: center;
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
          &.input-error {
            border: 1.25px solid red;
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