import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PostsFilterStyle = styled.div`
  margin-top: 50px;
  ${down('lg')} {
    padding-left: 48px;
    // padding-right: 48px;
  }
  ${down('md')} {
    padding-left: 32px;
    // padding-right: 48px;
  }
  scrollbar-width: none;
  .filters-container {  
    display: flex;
    align-items: center;
    .categories-container {
      display: flex;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
    }
    .filter-container {
      padding-right: 47.5px;
      & > button {
        color: var(--color-grey01);
        transition: all 0.25s ease-in;
        &.is-active {
          color: var(--color-white);
        }
        &:hover {
          color: var(--color-white);
          transition: all 0.25s ease-out;
        }
        p {
          white-space: nowrap;
          pointer-events: none;
        }
      }
    }
  }
`