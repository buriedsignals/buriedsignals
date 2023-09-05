import styled from "styled-components";
import { down } from "styled-breakpoints";

export const TalentStyle = styled.div`
  .talents {
    width: auto;
    ${down('lg')} {
      margin-left: 48px;
      margin-right: 48px;
    }
    ${down('md')} {
      margin-left: 32px;
      margin-right: 32px;
    }
    .talents-container {
      display: flex;
      flex-direction: column;
      .talent-container {
        display: flex;
        align-items: center;
        min-height: 54px;
        margin-bottom: 6.25px;
        padding-bottom: 6.25px;
        border-bottom: 1px solid var(--color-black03);
        &:first-child {
          min-height: auto;
          margin-bottom: 15px;
          border-bottom: initial;
        }
        &:last-child {
          border-bottom: initial;
        }
        .head {
          color: var(--color-green);
        }
        .profile-container {
          display: flex;
          align-items: center;
          width: 60%;
          .name {
            width: 50%;
            text-transform: uppercase;
          }
        }
        .expertises-container {
          width: 40%;
          p {
            display: inline-flex;
            text-transform: uppercase;
          }
        }
      }
    }
    .networks-container {
      display: flex;
      align-items: center;
      width: 50%;
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
    .talent-container-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 17.5px;
      .head {
        color: var(--color-green);
        margin-bottom: 8px;
      }
      .networks-container {
        margin: 17.5px 0;
      }
      &.is-open {
        .button-modal {
          &::before {
            transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, -180deg) !important;
            transition: all 0.25s ease-in;
          }
          &::after {
            transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 0deg) !important;
            transition: all 0.25s ease-in;
          }
        }
        .infos-container {
          max-height: 1000px;
          transition: all 1s ease-in;
        }
      }
      .head-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid var(--color-black03);
        .profile-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .expertises {
          position: relative;
          width: 100%;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -1px;
            display: block;
            height: calc(100% + 1px);
            width: 20px;
            background: linear-gradient(90deg, rgba(22,25,27,1) 0%, rgba(22,25,27,0) 100%);
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
            background: linear-gradient(90deg, rgba(22,25,27,0) 0%, rgba(22,25,27,1) 100%);
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
            padding: 7.5px 0 10px;
            text-align: initial;
            overflow-x: scroll;
            overflow-y: hidden;
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            .expertise-container {
              display: inline-flex;
              align-items: center;
              p {
                color: var(--color-green);
                white-space: nowrap;
              }
              &:not(:last-child) {
                &::after {
                  content: '';
                  width: 2.5px;
                  height: 2px;
                  margin: 5px;
                  background: var(--color-green);
                }
              }
            }
          }
        }
        p {
          text-transform: uppercase;
        }
      }
      .infos-container {
        position: relative;
        width: 100%;
        border-bottom: 1px solid var(--color-black03);
        transition: all 1s ease-out -0.45s;
        ${down('talents')} {
          max-height: 0px;
          overflow: hidden;
        }
        p {
          text-transform: uppercase;
        }
      }
      .button-modal {
        position: relative;
        width: 12px;
        height: 12px;
        &::before, &::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          display: block;
          width: 100%;
          height: 2px;
          background: var(--color-white);
          transform: translate3D(-50%, -50%, 0);
          transition: all 0.25s ease-in;
        }
        &::after {
          transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 90deg);
        }
      }
    }
  }
`