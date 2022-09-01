import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderDesktopStyle = styled.header`
  padding: 18px 36px;
  background-color: var(--color-black02);
  .header-desktop-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-container {
      display: flex;
      align-items: center;
      .pages {
        position: relative;
        display: flex;
        margin-left: 47.5px;
        padding-left: 47.5px;
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
    .right-container {
      .actions {
        display: flex;
        align-items: center;
        .action {
          &:not(:last-child) {
            margin-right: 40px;
            ${down('lg')} {
              display: none;
            }
          }
          a, button {
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
            }
          }
        }
      }
    }
  }
`