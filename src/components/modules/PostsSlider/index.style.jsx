import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PostsSliderStyle = styled.div`
  .list-container {  
    padding-top: 60px;
    padding-bottom: 60px;
    &.type-experts {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      justify-content: flex-start;
      padding-top: 0;
      padding-bottom: 25px;
      ${down('md')} {
        padding-left: 16px;
        padding-right: 16px;
      }
      ${down('list')} {
        justify-content: center;
      }
      .item-container {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      &.no-result-container {
        display: none;
      }
    }
    .item-container {
      ${down('md')} {
        width: auto;
        margin: 0;
      }
      .no-result {
        color: var(--color-grey01);
      }
    }
    & > .is-hide {
      display: none;
      width: 0;
      height: 0;
      margin: 0 !important;
      opacity: 0;
      visibility: hidden;
    }
  }
  .more-slides {
    display: flex;
    gap: 12px;
    width: fit-content;
    margin: 0 auto;
    &.is-hide {
      display: none;
      width: 0;
      height: 0;
      margin: 0 !important;
      opacity: 0;
      visibility: hidden;
    }
    .slide {
      position: relative;
      color: var(--color-white);
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        bottom: -2px; left: 0;
        display: block;
        width: 100%;
        height: 1px;
        opacity: 0;
        transform: scale3D(0, 1, 1);
        transition: all 0.25s ease-in;
      }
      &.is-active {
        color: var(--color-green);
        &::before {
          background-color: var(--color-green);
          opacity: 1;
          transform: scale3D(1, 1, 1);
        }
      }
      &:hover {
        &::before {
          background-color: var(--color-white);
          opacity: 1;
          transform: scale3D(1, 1, 1);
          transition: all 0.25s ease-out;
        }
      }
    }
    .arrow-left {
      transform: translate3D(0, 0, 0);
      transition: transform 0.25s ease-in;
      cursor: pointer;
      &:hover {
        transform: translate3D(-1.5px, 0, 0) scale3D(1, 1, 1);
        transition: transform 0.25s ease-out;
      }
    }
    .arrow-right {
      transform: translate3D(0, 0, 0);
      transition: transform 0.25s ease-in;
      cursor: pointer;
      &:hover {
        transform: translate3D(1.5px, 0, 0) scale3D(1.1, 1.1, 1.1);
        transition: transform 0.25s ease-out;
      }
    }
  }
`