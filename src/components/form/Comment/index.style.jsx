import { down } from "styled-breakpoints";
import styled from "styled-components";

export const FormStyle = styled.div`
  .add-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${down('md')} {
      display: flex;
      flex-direction: column;
    }
    .input-container {
      width: 100%;
      margin-right: 18px;
      ${down('md')} {
        width: 100%;
        margin: 18px 0;
      }
      input {
        display: block;
        width: 100%;
        padding: 9px 25px;
        background-color: var(--color-black03) !important;
        border: 1.25px solid var(--color-grey01);
        border-radius: 4px;
        color: var(--color-white);
        outline: none;
      }
    }
  }
`