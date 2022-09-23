import styled from "styled-components";
import { down } from "styled-breakpoints";

export const SigninTemplateStyle = styled.main`
  .signin-container {
    padding: 117.5px 16px;
    .title {
      margin-bottom: 60px;
      text-align: center;
    }
    .form-container {
      .connect-twitter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 27.5px;
        padding: 17.5px 25px;
        background-color: var(--color-white);
        border-radius: 4px;
        svg {
          path {
            fill: #1E8EEE;
          }
        }
        p {
          margin-left: 10px;
          color: var(--color-black01);
        }
      }
      p {
        text-align: center;
      }
      .label {
        margin-bottom: 27.5px;
        color: var(--color-grey02);
      }
      .form {
        .inputs-container {
          margin-bottom: 32px;
          input {
            display: block;
            width: 100%;
            padding: 17.5px 25px;
            background-color: var(--color-black03) !important;
            border: 1.25px solid var(--color-grey01);
            border-radius: 4px;
            color: var(--color-white);
            text-align: center;
            outline: none;
            &:not(:first-child) {
              margin-top: 15px;
            }
          }
          .input-error {
            border: 1.25px solid red;
          }
        }
        button {
          min-width: 140px;
          margin: 0 auto;
          p {
            width: 100%;
            text-align: center;
          }
        }
        a {
          display: block;
          margin-top: 24px;
          color: var(--color-grey02);
          text-decoration: underline;
          transition: all 0.25s ease-out;
          &:hover {
            color: var(--color-white);
            transition: all 0.25s ease-out;
          }
        }
      }
    }
  }
`