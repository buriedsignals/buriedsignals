import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ResourceStyle = styled.a`
  display: block;
  background-color: var(--color-black03);
  width: 308px;
  .resource-container {
    height: 444px;
    .visual-container, .content-container {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .visual-container {
      position: relative;
      height: 172px;
      background: red;
      img {
        position: absolute;
        top: 50%; left: 50%;
        width: 100%;
        height: auto;
        transform: translate3D(-50%, -50%, 0);
      }
    }
    .content-container {
      padding: 32px;
      .informations-container {
        height: 166px;
        margin-bottom: 25px;
        .title {
          margin-bottom: 18px;
          color: var(--color-white);
        }
        .description {
          color: var(--color-grey03);
        }
      }
      .more-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--color-grey01);
        text-transform: uppercase;
        .source-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg {
            margin-left: 12.5px;
            path {
              stroke: var(--color-grey01);
            }
          }
        }
      }
    }
  }
`