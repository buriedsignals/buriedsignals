import styled from "styled-components";
import { down } from "styled-breakpoints";

export const MetrictStyle = styled.div`
  display: block;
  width: 100%;
  .metric-container {
    padding: 12px 16px;
    border: 1px solid #2A2E31;
    border-radius: 4px;
    & > p {
      padding-bottom: 4px;
      color: var(--color-grey01);
      text-transform: uppercase;
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