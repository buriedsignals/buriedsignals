import styled from "styled-components";

export const ReplyStyle = styled.button`
  position: relative;
  display: inline-block;
  background-color: inherit;
  border: inherit;
  .reply-container {
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
    .reply-container {
      p {
        color: var(--color-green);
        transition: all 0.25s ease-out;
      }
    }
  }
`