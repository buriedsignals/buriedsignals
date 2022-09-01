import styled from "styled-components";

export const CommentStyle = styled.button`
  position: relative;
  background-color: inherit;
  border: 1.25px solid var(--color-grey01);
  border-radius: 5px;
  transition: all 0.25s ease-in;
  .comment-container {
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
      color: var(--color-white);
      transition: all 0.25s ease-in;
    }
  }
  &:hover {
    background-color: var(--color-white);
    transition: all 0.25s ease-out;
    .comment-container {
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
  &.is-commented {
    background-color: var(--color-white);
    .comment-container {
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