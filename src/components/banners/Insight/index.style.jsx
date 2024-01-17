import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InsightStyle = styled.div`
  display: block;
  background-color: var(--color-black03);
  ${down('md')} {
    width: 100%;
  }
  .insight-container {
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
      ${down('md')} {
        height: 218px;
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
        }
        .description {
          color: var(--color-grey03);
        }
      }
      .actions-container {
        button {
          &:not(:last-child) {
            margin-right: 7.5px;
          }
        }
      }
    }
  }
`