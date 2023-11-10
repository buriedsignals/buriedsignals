import styled from "styled-components";
import { down } from "styled-breakpoints";

export const IncludeStyle = styled.div`
  width: 100%;
  height: 100%;
  .include-container {
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: var(--color-black03);
    border-radius: 8px;
    a {
      color: var(--color-white);
      font-weight: 500;
      text-decoration: underline;
      transition: all 0.25s ease-in;
      &:hover {
        color: var(--color-green);
        transition: all 0.25s ease-out;
      }
    }
    .soon {
      color: var(--color-grey01);
    }
  }
`