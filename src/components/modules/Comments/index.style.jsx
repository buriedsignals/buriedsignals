import styled from "styled-components";
import { down } from "styled-breakpoints";

export const CommentsStyle = styled.div`
  .comments-container {
    padding: 65px 0;
    background-color: var(--color-black03);
    .title {
      margin-bottom: 65px;
      text-align: center;
    }
    .add-container {
      margin-bottom: 20px;
      padding: 25px;
      background-color: var(--color-black02);
      border-radius: 8px;
      ${down('md')} {
        margin: 0 16px 20px;
      }
    }
    & > div > .panel-container {
      ${down('md')} {
        margin: 0 16px;
      }
      & > div > div > .comment-container {
        margin-bottom: 20px;
      }
    }
  }
`