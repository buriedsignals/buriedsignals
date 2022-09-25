import styled from "styled-components";
import { down } from "styled-breakpoints";

export const CommentStyle = styled.div`
  .comment-container {
    padding: 25px;
    background-color: var(--color-black02);
    border-radius: 8px;
    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
        & > * {
          margin-right: 16px;
        }
        .name {
          color: var(--color-white);
          transition: all 0.25s ease-in;
          &:hover {
            color: var(--color-green);
            transition: all 0.25s ease-out;
          }
        }
        .date {
          color: var(--color-grey01);
        }
      }
      .header-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > * {
          margin-left: 24px;
        }
        ${down('md')} {
          display: none;
        }
      }
    }
    .comment-content {
      color: var(--color-grey02);
      .username {
        color: var(--color-green);
      }
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
    .add-form {
      margin-top: 16px;
      ${down('md')} {
        margin-top: 0;
        margin-bottom: 24px;
      }
    }
    .footer-actions {
      display: none;
      justify-content: space-between;
      align-items: center;
      margin-top: 18px;
      & > * {
        margin-right: 24px;
      }
      ${down('md')} {
        display: flex;
      }
    }
  }
`