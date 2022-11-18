import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ProjectStyle = styled.a`
  display: block;
  width: 529px;
  background-color: var(--color-black03);
  ${down('md')} {
    width: 343px;
  }
  .project-container {
    height: 510px;
    ${down('md')} {
      height: 485px;
    }
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
        width: auto;
        height: 100%;
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
        margin-bottom: 25px;
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
        height: 91px;
        ${down('md')} {
          height: 145px;
        }
        .title {
          margin-bottom: 12.5px;
          color: var(--color-white);
        }
        .description {
          color: var(--color-grey03);
        }
      }
    }
  }
`