import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InsightStyle = styled.a`
  display: block;
  background-color: var(--color-black03);
  width: 529px;
  ${down('md')} {
    width: 343px;
  }
  .insight-container {
    height: 584px;
    .visual-container, .content-container {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .visual-container {
      position: relative;
      height: 296px;
      ${down('md')} {
        height: 200px;
      }
      img {
        position: absolute;
        top: 50%; left: 50%;
        width: 100%;
        height: auto;
        transform: translate3D(-50%, -50%, 0);
      }
    }
    .content-container {
      padding: 32px 40px;
      ${down('md')} {
        padding: 24px 40px;
      }
      .extras-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32.5px;
        color: var(--color-grey01);
        text-transform: uppercase;
        .text-container {
          display: flex;
          align-items: center;
          .author {
            margin-right: 22.5px;
            color: var(--color-grey03);
          }
        }
      }
      .informations-container {
        height: 120px;
        margin-bottom: 25px;
        ${down('md')} {
          height: 220px;
        }
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
        justify-content: space-between;
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