import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PostsFilterStyle = styled.div`
  margin-top: 50px;
  ${down('lg')} {
    padding-left: 48px;
    padding-right: 48px;
  }
  ${down('md')} {
    padding-left: 0;
    padding-right: 0;
  }
  scrollbar-width: none;
  .filters-container {  
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${down('md')} {
      flex-direction: column; 
      justify-content: center;
      align-items: flex-start;
    }
    .categories-container {
      display: flex;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      ${down('md')} {
        order: 2; 
        width: 100%;
        padding-left: 42.5px;
        padding-right: 32px;
      }
      .filter-container:not(:first-child) {
        padding-left: 47.5px;
        ${down('md')} {
          padding-left: 40px;
        }
      }
    }
    .specific-container {
      display: flex;
      column-gap: 30px;
      padding-left: 47.5px;
      ${down('md')} {
        padding-left: 40px;
      }
    }
    .filter-categories {
      ${down('md')} {
        order: 1; 
        margin-bottom: 25px;
        padding-left: 32px;
        padding-right: 32px;
      }
    }
    .filter-awards {
      ${down('md')} {
        order: 1; 
        margin-bottom: 25px;
        padding-left: 32px;
        padding-right: 32px;
      }
    }
    .filter-container {
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