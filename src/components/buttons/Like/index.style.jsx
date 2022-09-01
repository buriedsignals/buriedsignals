import styled from "styled-components";

export const LikeStyle = styled.button`
  position: relative;
  background-color: inherit;
  border: 1.25px solid var(--color-green);
  border-radius: 5px;
  transition: all 0.25s ease-in;
  .like-container {
    display: flex;
    align-items: center;
    padding: 12px;
    svg {
      path {
        transition: all 0.25s ease-in;
      }
    }
    p {
      margin-left: 10px;
      color: var(--color-green);
      transition: all 0.25s ease-in;
    }
  }
  &:hover {
    background-color: var(--color-green);
    transition: all 0.25s ease-out;
    .like-container {
      svg {
        path {
          stroke: var(--color-black02);
          transition: all 0.25s ease-out;
        }
      }
      p {
        color: var(--color-black02);
        transition: all 0.25s ease-out;
      }
    }
  }
  &.is-liked {
    background-color: var(--color-green);
    .like-container {
      svg {
        path {
          stroke: var(--color-black02);
        }
      }
      p {
        color: var(--color-black02);
      }
    }
  }
`