import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderMobileStyle = styled.header`
  .header-mobile-container {
    .top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 36px;
      background-color: var(--color-black02);
      .logo {
        display: flex;
      }
      .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .action {
          &:not(:last-child) {
            margin-right: 40px;
          }
          a {
            p {
              color: var(--color-white);
              transition: all 0.25s ease-in;
            }
            &:hover {
              p {
                color: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
          }
          button {
            display: flex;
            svg rect {
              fill: var(--color-white);
              transition: all 0.25s ease-in;
            }
            &:hover {
              svg rect {
                fill: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
          }
        }
      }
    }
    .header-panel {
      position: relative;
      height: calc(100vh - 66px);
      padding: 87.5px 64px 64px;
      background-color: var(--color-black01);
      z-index: 2;
      .pages {
        .page {
          :not(:last-child) {
            margin-bottom: 50px;
          }
          a {
            p {
              color: var(--color-white);
              transition: all 0.25s ease-in;
            }
            &:hover {
              p {
                color: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
          }
          .modal {
            position: relative;
            display: flex;
            align-items: center;
            z-index: 2;
            svg {
              margin-right: 7.5px;
              transition: all 0.05s ease-in-out;
            }
            p {
              color: var(--color-white);
              transition: all 0.25s ease-in;
            }
            &:hover {
              svg {
                path{
                  fill: var(--color-green);
                  transition: all 0.05s ease-out;
                } 
              }
              p {
                color: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
            &.is-open {
              svg {
                transform: rotate3D(0, 0, 1, -180deg);
                transition: all 0.05s ease-in-out;
                path{
                  fill: var(--color-green);
                  transition: all 0.05s ease-out;
                } 
              }
              p {
                color: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
          }
          .links {
            .link {
              margin-top: 50px;
              margin-left: 56px;
              a {
                p {
                  color: var(--color-white);
                  transition: all 0.25s ease-in;
                }
                &:hover {
                  p {
                    color: var(--color-green);
                    transition: all 0.25s ease-out;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`