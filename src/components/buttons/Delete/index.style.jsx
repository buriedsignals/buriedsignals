import styled from "styled-components";

export const DeleteStyle = styled.button`
  position: relative;
  display: inline-block;
  background-color: inherit;
  border: inherit;
  .delete-container {
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
    .delete-container {
      p {
        color: var(--color-orange);
        transition: all 0.25s ease-out;
      }
    }
  }
`