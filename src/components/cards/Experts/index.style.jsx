import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ExpertsStyle = styled.div`
  display: block;
  width: 346px;
  padding: 32px;
  background-color: var(--color-black02);
  .experts-container {
    .profile-container {
      display: flex;
      margin-bottom: 20px;
      .photo-container {
        position: relative;
        display: block;
        width: 48px;
        height: 48px;
        margin-right: 16px;
        border-radius: 100%;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%; left: 50%;
          height: 100%;
          width: auto;
          transform: translate3D(-50%, -50%, 0);
        }
      }
      .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          text-transform: uppercase;
        }
      }
    }
    .networks-container {
      display: flex;
      align-items: center;
      padding-top: 14px;
      border-top: 1px solid var(--color-black03);
      a {
        display: inline-block;
        width: 20px;
        height: 20px;
        &:not(:last-child) {
          margin-right: 12px;
        }
        &:hover {
          svg {
            path {
              fill: var(--color-green);
              transition: all 0.25s ease-in;
            }
          }
          &.portfolio {
            svg {
              path {
                fill: initial;
                stroke: var(--color-green);
                transition: all 0.25s ease-in;
              }
            }
          }
        }
        &.portfolio {
          svg {
            width: 100%;
            height: 100%;
            path {
              fill: initial;
              stroke: var(--color-white);
              transition: all 0.25s ease-in;
            }
          }
        }
        svg {
          width: 100%;
          height: 100%;
          path {
            fill: var(--color-white);
            transition: all 0.25s ease-in;
          }
        }
      }
    }
    .expertises {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -1px;
        display: block;
        height: calc(100% + 1px);
        width: 20px;
        background: linear-gradient(90deg, rgba(28,30,31,1) 0%, rgba(28,30,31,0) 100%);
        opacity: 0;
        pointer-events: none;
        transition: all 0.1s linear;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -1px;
        display: block;
        height: calc(100% + 1px);
        width: 20px;
        background: linear-gradient(90deg, rgba(28,30,31,0) 0%, rgba(28,30,31,1) 100%);
        opacity: 0;
        pointer-events: none;
        transition: all 0.1s linear;
      }
      &.is-before {
        &::before {
          opacity: 1;
          transition: all 0.1s linear;
        }
      }
      &.is-after {
        &::after {
          opacity: 1;
          transition: all 0.1s linear;
        }
      }
      .expertises-container {
        display: flex;
        max-width: 100%;
        padding: 14px 0;
        border-top: 1px solid var(--color-black03);
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        .expertise-container {
          display: inline-flex;
          align-items: center;
          &:not(:last-child) {
            &::after {
              content: '';
              width: 2.5px;
              height: 2px;
              margin: 5px;
              background: var(--color-green);
            }
          }
          p {
            white-space: nowrap;
          }
        }
      }
    }
  }
`
