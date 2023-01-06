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
    .categories-slider-container {
        position: relative;
        display: flex;
        overflow: hidden;
        ${down('md')} {
          order: 2; 
          width: calc(100% - 70px);
          margin-left: 35px;
          margin-right: 35px;
        }
      .categories-container {
        position: relative;
        display: flex;
        overflow: hidden;
        ${down('md')} {
          order: 2; 
          width: 100%;
        }
        ${down('sm')} {
          overflow-x: scroll;
          overflow-y: hidden;
          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
        }
        .slider-container {
          display: flex;
          padding: 5px 0;
          transition: transform 0.25s ease-in-out;
        }
        .filter-container:not(:last-child) {
          padding-right: 47.5px;
          ${down('md')} {
            padding-right: 40px;
          }
        }
      }
      .button-slider {
        position: absolute;
        height: 100%;
        background: var(--color-black01);
        padding-left: 10px;
        padding-right: 10px;
        span {
          pointer-events: none;
        }
        ${down('sm')} {
          span {
            display: none;
          }
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          display: block;
          height: 100%;
          width: 20px;
        }
        &-previous {
          left: -1px;
          z-index: 5;
          &::before {
            right: 0;
            border-left: 1px solid var(--color-white);
            background: linear-gradient(90deg, rgba(22,25,27,1) 0%, rgba(22,25,27,0) 100%);
            transform: translate3D(100%, 0, 0);
          }
          svg {
            margin-right: 10px;
            transform: translate3D(0, -50%, 0) rotate3D(0, 0, 1, 90deg);
            ${down('sm')} {
              margin-right: 0;
            }
          }
        }
        &-next {
          right: -1px;
          z-index: 5;
          &::before {
            left: 0;
            border-right: 1px solid var(--color-white);
            background: linear-gradient(90deg, rgba(22,25,27,0) 0%, rgba(22,25,27,1) 100%);
            transform: translate3D(-100%, 0, 0);
          }
          svg {
            margin-left: 10px;
            transform: translate3D(0, -50%, 0) rotate3D(0, 0, 1, -90deg);
            ${down('sm')} {
              margin-left: 0;
            }
          }
        }
      }
    }
    .specific-container {
      display: flex;
      column-gap: 30px;
      padding-left: 30px;
      ${down('md')} {
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 30px;
        padding-left: 32.5px;
      }
      ${down('sm')} {
        column-gap: 15px;
        row-gap: 15px;
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