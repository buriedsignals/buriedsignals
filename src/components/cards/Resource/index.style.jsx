import styled from "styled-components";

export const ResourceStyle = styled.a`
  display: block;
  background-color: var(--color-black03);
  width: 308px;
  .resource-container {
    height: 441px;
    .visual-container, .content-container {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .visual-container {
      position: relative;
      height: 172px;
      img {
        position: absolute;
        top: 50%; left: 50%;
        width: auto;
        height: 100%;
        transform: translate3D(-50%, -50%, 0);
      }
    }
    .content-container {
      padding: 20px;
      .extras-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        color: var(--color-grey01);
        text-transform: uppercase;
        .text-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .categories-container {
            order: 1;
            display: flex;
            .category {
              &:not(:last-child) {
                margin-right: 15px;
              }
            }
          }
          .author {
            order: 2;
            margin-right: 22.5px;
            color: var(--color-grey03);
          }
        }
      }
      .informations-container {
        height: 125px;
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