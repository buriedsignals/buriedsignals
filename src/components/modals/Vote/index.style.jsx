import { down } from "styled-breakpoints";
import styled from "styled-components";

export const VoteStyle = styled.div`
  position: relative;
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
  .panel-vote {
    position: fixed;
    top: 50%; left: 50%;
    width: 100%;
    max-width: 860px;
    background: var(--color-black01);
    border-radius: 4px;
    transform: translate3D(-50%, -50%, 0);
    overflow-y: scroll;
    z-index: 2;
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
    .panel-vote-container {
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
        width: fit-content;
        margin: 0 auto 32.5px;
        &.input-error .input-container {
          border: 1.25px solid var(--color-orange);
        }
        .input-container {
          display: inline-flex;
          justify-content: center;
          min-width: 40px;
          padding: 10px;
          border: 1.25px solid var(--color-grey01);
          // border-radius: 5px;
          cursor: pointer;
          &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          &.is-active {
            background-color: var(--color-black03);
          }
          &:hover {
            background-color: var(--color-black03);
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