import styled from "styled-components";
import { down } from "styled-breakpoints";

export const MetrictStyle = styled.div`
  display: block;
  width: 100%;
  max-width: 529px;
  .metric-container {
    padding: 12px 16px;
    border: 1px solid #2A2E31;
    border-radius: 4px;
    .header-container {
      display: flex;
      justify-content: space-between;
      padding-bottom: 9px;
      p {
        text-transform: uppercase;
      }
      .title-container {
        display: flex;
        .title {
          margin-right: 12px;
          color: var(--color-grey01);
        }
        svg {
          path {
            transition: fill 0.25s ease-in;
          }
          &:hover {
            path {
              fill: var(--color-white);
            }
          }
        }
      }
    }
    .content-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      p {
        span {
          padding-left: 2px;
        }
      }
      svg {
        path {
          transition: fill 0.25s ease-in;
        }
        &:hover {
          path {
            fill: var(--color-white);
          }
        }
      }
    }
  }
`