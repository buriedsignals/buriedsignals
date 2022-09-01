import styled from "styled-components";

export const SecondaryStyle = styled.a`
  position: relative;
  display: inline-block;
  background-color: inherit;
  border: 1px solid var(--color-grey01);
  border-radius: 5px;
  transition: all 0.25s ease-in;
  .secondary-container {
    display: flex;
    align-items: center;
    padding: 12px;
    svg {
      path {
        transition: all 0.25s ease-in;
      }
    }
    p {
      color: var(--color-white);
      text-transform: uppercase;
      transition: all 0.25s ease-in;
    }
    & > *:not(:first-child) {
      margin-left: 10px;
    }
  }
  &:hover {
    background-color: var(--color-white);
    border: 1px solid var(--color-white);
    transition: all 0.25s ease-out;
    .secondary-container {
      svg {
        path {
          stroke: var(--color-black02);
          fill: var(--color-black02);
          transition: all 0.25s ease-out;
        }
      }
      p {
        color: var(--color-black02);
        transition: all 0.25s ease-out;
      }
    }
  }
`