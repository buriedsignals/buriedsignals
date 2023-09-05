import styled from "styled-components";
import { down } from "styled-breakpoints";

export const AccordionStyle = styled.div`
  .accordion-container {
    .select-container {
      margin-bottom: 40px;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        padding-left: 32px;
        padding-right: 32px;
      }
      button {
        color: var(--color-grey01);
        transition: all 0.25s ease-in;
        &:not(:first-child) {
          margin-left: 50px;
          ${down('md')} {
            margin-left: 30px;
          }
        }
        &.is-active {
          color: var(--color-white);
          transition: all 0.25s ease-in;
        }
        &:hover {
          color: var(--color-white);
          transition: all 0.25s ease-in;
        }
      }
    }
    .panel-container {
      background-color: var(--color-black02);
      padding-bottom: 60px;
      .list-container {
        ${down('md')} {
          padding-top: 20px;
        }
      }
    }
  }
`