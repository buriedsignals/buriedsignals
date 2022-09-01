import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PostsListStyle = styled.div`
  .list-container {  
    padding-top: 60px;
    padding-bottom: 60px;
    &.type-spotlight {
      padding-left: 16px;
      padding-right: 16px;
      ${down('md')} {
        display: flex;
        flex-wrap: wrap;
        column-gap: 40px;
        justify-content: center;
        padding-top: 48px;
        padding-bottom: 48px;
      }
      .item-container {
        &:not(:last-child) {
          margin-bottom: 80px;
          ${down('md')} {
            margin-bottom: 40px;
          }
        }
      }
    }
    &.type-insight {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      justify-content: center;
      ${down('md')} {
        padding-left: 16px;
        padding-right: 16px;
      }
      .item-container {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    &.type-resource {
      display: flex;
      flex-wrap: wrap;
      column-gap: 77px;
      justify-content: center;
      ${down('md')} {
        padding-left: 16px;
        padding-right: 16px;
      }
      .item-container {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    &.type-jury {
      display: flex;
      flex-wrap: wrap;
      column-gap: 77px;
      justify-content: center;
      ${down('md')} {
        padding-left: 40px;
        padding-right: 40px;
      }
      .item-container {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    &.type-project {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      justify-content: center;
      padding-top: 0;
      ${down('md')} {
        padding-left: 16px;
        padding-right: 16px;
      }
      .item-container {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    .item-container {
      ${down('md')} {
        width: auto;
        margin: 0;
      }
      &:not(:last-child) {
        margin-bottom: 80px;
        ${down('md')} {
          margin-bottom: 40px;
        }
      }
      .no-result {
        color: var(--color-grey01);
      }
    }
  }
  .more-posts {
    padding-bottom: 20px;
  }
`