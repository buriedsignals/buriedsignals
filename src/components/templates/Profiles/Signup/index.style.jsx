import styled from "styled-components";
import { down } from "styled-breakpoints";

export const SignupTemplateStyle = styled.div`
  .signup-container {
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
      .label {
        margin-bottom: 27.5px;
        color: var(--color-grey02);
      }
      .form {
        .inputs-container {
          margin-bottom: 32px;
          & > * {
            &:not(:first-child) {
              margin-top: 15px;
              &.subtitle {
                margin-top: 30px;
                margin-left: 9px;
              }
            }
          }
          input {
            display: block;
            width: 100%;
            background-color: inherit;
            border: none;
            border-radius: 0;
            color: var(--color-white);
            outline: none;
            &::placeholder {
              color: var(--color-grey01);
              opacity: 1;
            }
            &:-ms-input-placeholder {
              color: var(--color-grey01);
            }
            &::-ms-input-placeholder {
              color: var(--color-grey01);
            }
          }
          .input {
            display: block;
            width: 100%;
            padding: 16px 16px;
            background-color: var(--color-black03) !important;
            border: 1.25px solid var(--color-grey01);
            border-radius: 4px;
            color: var(--color-white);
            outline: none;
            transition: all 0.25s ease-out;
          }
          .input-icon {
            display: flex;
            gap: 22px;
            padding: 9px;
            .icon-container {
              width: 32px;
              height: 32px;
              display: inline-block;
              padding: 5px;
              border: 1px solid var(--color-grey01);
              border-radius: 5px;
              svg {
                width: 100%;
                height: 100%;
                display: flex;
              }
            }
          }
          .input-expertises {
            &.input-error {
              border: none;
              .button-modal {
                border: 1px solid var(--color-orange);
              }
            }
          }
          .input-checkbox {
            display: flex;
            justify-content: space-between;
            &:not(:first-child) {
              margin-top: 15px;
              &.subtitle {
                margin-top: 30px;
                margin-left: 9px;
              }
            }
            input {
              width: auto;
              accent-color: var(--color-green);
            }
          }
          textarea {
            width: 100%;
            padding: 16px 16px;
            background-color: var(--color-black03) !important;
            border: 1.25px solid var(--color-grey01);
            border-radius: 5px;
            color: var(--color-white);
            outline: none;
            resize : none;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
              display: none;
            }
            &::placeholder {
              color: var(--color-grey01);
              opacity: 1;
            }
            &:-ms-input-placeholder {
              color: var(--color-grey01);
            }
            &::-ms-input-placeholder {
              color: var(--color-grey01);
            }
            &:not(:first-child) {
              margin-top: 15px;
            }
          }
          .input-error {
            border: 1.25px solid var(--color-orange);
          }
        }
        & > button {
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
        .input-talent {
          display: flex;
          gap: 12.5px;
          input[type="checkbox"] {
            position: relative;
            width: calc((11px * 2) + 12px);
            height: 20px;
            margin: 0;
            padding: 0;
            background-color: var(--color-black01) !important;
            -webkit-appearance: none;
            appearance: none;
            cursor: pointer;
            transition: all 0.25s ease-out;
            &::before {
              content: '';
              position: absolute;
              top: 50%; left: 0;
              display: block;
              width: 11px;
              height: 11px;
              background-color: var(--color-grey01);
              border-radius: 2px;
              transform: translate3D(4px, -50%, 0);
              transition: all 0.25s ease-out;
            }
            &:checked {
              background-color: var(--color-green) !important;
              border: 1.25px solid var(--color-green);
              transition: all 0.25s ease-out;
              &::before {
                left: 100%;
                background-color: var(--color-black01);
                transform: translate3D(calc(-100% - 4px), -50%, 0);
                transition: all 0.25s ease-out;
              }
            }
          }
          p {
            text-align: left;
          }
        }
        .input-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12.5px;
          .button {
            position: relative;
            width: 40px;
            height: 40px;
            min-width: 40px;
            min-width: auto;
            border-radius: 100%;
            background-color: var(--color-black03);
            border: 1px solid var(--color-grey01);
            cursor: pointer;
            overflow: hidden;
            transition: all 0.25s ease-out;
            &::before, &::after {
              content: "";
              position: absolute;
              top: 50%; left: 50%;
              display: block;
              width: 8px;
              height: 2px;
              background: var(--color-grey01);
              transform: translate3D(-50%, -50%, 0);
              transition: all 0.25s ease-out;
              z-index: 1;
            }
            &::after {
              transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 90deg);
            }
            &:hover {
              border: 1px solid var(--color-green);
              transition: all 0.25s ease-in;
              &::before, &::after {
                background: var(--color-green);
                transition: all 0.25s ease-in;
              }
            }
            input[type="file"] {
              position: absolute;
              margin-top: 3px;
              margin-left: 3px;
              height: 1px;
              width: 1px;
              z-index: -5;
            }
            img {
              position: absolute;
              top: 50%; left: 50%;
              width: 100%;
              height: auto;
              transform: translate3D(-50%, -50%, 0);
              z-index: 2;
            }
          }
          &.input-error {
            border: none;
            .button {
              border: 1px solid var(--color-orange);
            }
          }
          p {
            color: var(--color-grey01)
          }
        }
        .more-action {
          text-align: center;
        }
      }
    }
  }
`