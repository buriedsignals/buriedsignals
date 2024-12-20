import styled from "styled-components";
import { down } from "styled-breakpoints";

export const SpotlightStyle = styled.div`
  display: block;
  width: 100%;
  background-color: var(--color-black03);
  ${down('md')} {
    width: 343px;
  }
  .spotlight-container {
    display: flex;
    height: 302px;
    ${down('md')} {
      display: block;
      height: auto;
    }
    .visual-container, .content-container {
      width: 50%;
      height: 100%;
      overflow: hidden;
      ${down('md')} {
        width: 100%;
      }
    }
    .visual-container {
      position: relative;
      display: block;
      ${down('md')} {
        height: 218px;
      }
      .awards {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 40px;
        background-color: var(--color-green);
        transform: translate3d(-38.75%, 100%, 0) rotate3d(0, 0, 1, -45deg);
        z-index: 1;
        ${down('md')} {
          transform: translate3d(-33.75%,95%,0) rotate3d(0,0,1,-45deg);
        }
        p {
          position: absolute;
          top: 50%; left: 50%;
          color: var(--color-black02);
          text-transform: uppercase;
          transform: translate3D(-50%, -50%, 0);
        }
      }
      img {
        position: absolute;
        top: 50%; left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate3D(-50%, -50%, 0);
      }
    }
    .content-container {
      padding: 32px 48px;
      ${down('md')} {
        padding: 41px 23px;
      }
      .extras-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 42.5px;
        color: var(--color-grey01);
        text-transform: uppercase;
        ${down('md')} {
          align-items: flex-start;
        }
        .author {
          margin-right: 22.5px;
          white-space: nowrap;
        }
        .categories-container {
          display: flex;
          align-items: center;
          opacity: 0.5;
          .category {
            &:not(:first-child) {
              margin-left: 22.5px;
            }
          }
        }
      }
      .informations-container {
        height: 124px;
        margin-bottom: 20px;
        .title {
          margin-bottom: 12.5px;
          color: var(--color-white);
          // ${down('md')} {
            font-size: 18px;
            line-height: 24px;
          // }
        }
        .description {
          color: var(--color-grey03);
          // ${down('md')} {    
            font-size: 14px;
            line-height: 18px;
          // }
        }
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        .actions-container {
          display: flex;
          flex-wrap: wrap;
          gap: 7.5px;
          a {
            width: inherit;
            .secondary-container {
              ${down('md')} {
                padding: 12px 8px;
              }
            }
          }
        }
        & > a {
          width: inherit;
          margin: 0;
        }
      }
    }
  }
`