import styled from "styled-components";

export const BookmarkStyle = styled.button`
  position: relative;
  background-color: inherit;
  border: 1.25px solid var(--color-grey01);
  border-radius: 5px;
  transition: all 0.25s ease-in;
  .bookmark-container {
    display: flex;
    align-items: center;
    padding: 9px 12px;
    svg {
      path {
        transition: all 0.25s ease-in;
      }
    }
  }
  &:hover {
    background-color: var(--color-white);
    transition: all 0.25s ease-out;
    .bookmark-container {
      svg {
        path {
          stroke: var(--color-black02);
          transition: all 0.25s ease-out;
        }
      }
    }
  }
  &.is-bookmarked {
    background-color: var(--color-white);
    .bookmark-container {
      svg {
        path {
          stroke: var(--color-black02);
        }
      }
    }
  }
`