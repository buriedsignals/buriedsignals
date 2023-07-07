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
  }
  .panel-vote {
    position: fixed;
    top: 50%; left: 50%;
    width: 100%;
    max-width: 484px;
    background: var(--color-black02);
    border-radius: 4px;
    transform: translate3D(-50%, -50%, 0);
    overflow-y: scroll;
    z-index: 3;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    ${down('md')} {
      max-width: calc(100% - 32px);
    }
    .panel-vote-container {
      position: sticky;
      max-width: 484px;
      margin: 0 auto;
      padding: 32px;
      ${down('md')} {
        padding: 25px;
      }
      .close-container {
        position: absolute;
        top: 27.5px; right: 27.5px;
        display: flex;
        width: 12.5px;
        height: 12.5px;
        svg {
          width: 12.5px;
          height: 12.5px;
          rect {
            height: 5px;
            fill: var(--color-white);
            transition: all 0.25s ease-in-out;
            &:first-child {
              x: 1.50049px;
              y: 21px;
            }
          }
        }
        &:hover {
          svg {
            rect {
              fill: var(--color-green);
              transition: all 0.25s ease-in-out;
            }
          }
        }
      }
      h3 {
        margin-right: 64px;
        margin-bottom: 32px;
        color: var(--color-grey01);
      }
      .description {
        margin-bottom: 32px;
        text-transform: none;
      }
      .inputs-container {
        width: fit-content;
        margin: 0 auto 32px;
        &.input-error .input-container {
          border: 1.25px solid var(--color-orange);
        }
        .input-container {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 42px;
          padding: 10px;
          border: 1.25px solid var(--color-black03);
          // border-radius: 5px;
          cursor: pointer;
          background-color: inherit;
          transition: all 0.25s ease-in-out;
          ${down('sm')} {
            width: 20%;
            height: 15.2vw;
          }
          &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            ${down('sm')} {
              border-bottom-left-radius: 0;
            }
          }
          &:nth-child(5) {
            ${down('sm')} {
              border-top-right-radius: 5px;
            }
          }
          &:nth-child(6) {
            ${down('sm')} {
              border-bottom-left-radius: 5px;
            }
          }
          &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            ${down('sm')} {
              border-top-right-radius: 0;
            }
          }
          &.is-active {
            background-color: var(--color-black03);
          }
          &:hover {
            background-color: var(--color-black03);
            transition: all 0.25s ease-in-out;
          }
        }
      }
      .buttons-container {
        display: flex;
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