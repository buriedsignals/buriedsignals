import styled from "styled-components";

export const EditStyle = styled.button`
  position: relative;
  display: inline-block;
  background-color: inherit;
  border: inherit;
  .edit-container {
    display: flex;
    align-items: center;
    svg {
      path {
        transition: all 0.25s ease-in;
      }
    }
    p {
      color: var(--color-white);
      transition: all 0.25s ease-in;
    }
    & > *:not(:first-child) {
      margin-left: 10px;
    }
  }
  &:hover {
    .edit-container {
      p {
        color: var(--color-blue);
        transition: all 0.25s ease-out;
      }
    }
  }
`