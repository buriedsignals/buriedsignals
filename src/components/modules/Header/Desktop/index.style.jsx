import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderDesktopStyle = styled.header`
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 10;
  .subheader {
    padding: 0 36px;
    background-color: var(--color-black04);
    .subheader-desktop-container {
      max-width: 774px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        width: 100%;
        padding: 18px 0;
        text-align: center;
        border-bottom: 1px solid var(--color-black04);
        transition: all 0.25s ease-in;
        p {
          color: var(--color-white);
        }
        &:hover {
          border-bottom: 1px solid var(--color-green);
          transition: all 0.25s ease-out;
        }
        &.is-active {
          border-bottom: 1px solid var(--color-green);
        }
      }
    }
  }
  .header-desktop-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 36px;
    background-color: var(--color-black02);
    .left-container {
      display: flex;
      align-items: center;
      .pages {
        position: relative;
        display: flex;
        margin-left: 32.5px;
        padding-left: 32.5px;
        &::before {
          content: '';
          position: absolute;
          top: 50%; left: 0;
          display: block;
          width: 1px;
          height: 31px;
          background-color: var(--color-grey01);
          transform: translate3D(0, -50%, 0);
        }
        .page {
          position: relative;
          margin-right: 50px;
          a {
            p {
              color: var(--color-white);
              transition: all 0.25s ease-in;
            }
            &:hover, &.is-hover {
              p {
                color: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
            &.is-active {
              p {
                color: var(--color-green);
              }
            }
          }
        }
      }
    }
    .right-container {
      .actions {
        display: flex;
        align-items: center;
        .action {
          &:not(:last-child) {
            margin-right: 32px;
            // ${down('lg')} {
            //   display: none;
            // }
          }
          a, button {
            svg {
              path {
                transition: fill 0.25s ease-in;
              }
            }
            p {
              color: var(--color-white);
              white-space: nowrap;
              transition: all 0.25s ease-in;
            }
            &:hover {
              p {
                color: var(--color-green);
                transition: all 0.25s ease-out;
              }
              &:not(.sponsor) {
                svg {
                  path {
                    fill: var(--color-green);
                    transition: all 0.25s ease-out;
                  }
                }
              }
            }
          }
        }
        .socials {
          display: flex;
          gap: 16px;
          svg {
            width: 18px;
            height: 18px;
            path {
              fill: var(--color-white);
              transition: fill 0.25s ease-in;
            }
            &:hover {
              path {
                fill: var(--color-green);
                transition: fill 0.25s ease-out;
              }
            }
          }
        }
      }
    }
  }
`