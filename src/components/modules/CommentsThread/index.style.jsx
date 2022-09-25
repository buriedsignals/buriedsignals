import styled from "styled-components";
import { down } from "styled-breakpoints";

export const CommentsThreadStyle = styled.div`
  .comments-thread-container {
    display: flex;
    margin-bottom: 20px;
    &::before {
      content: "";
      display: block;
      width: 2.5px;
      height: auto;
      margin: 0 52.5px;
      background-color: var(--color-grey02);
      ${down('md')} {
        margin: 0 16px 0 0;
      }
    }
    .panel-container {
      width: 100%;
      & > div:not(:last-child) {
        .comment-container {
          margin-bottom: 20px;
        }
      }
    }
  }
`