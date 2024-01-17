import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InvestigationsTemplateStyle = styled.div`
  padding: 115px 0 85px;
  & > .title {
    width: auto;
    ${down('lg')} {
      margin-left: 48px;
      margin-right: 48px;
    }
    ${down('md')} {
      margin-left: 32px;
      margin-right: 32px;
    }
  }
  .description-container {
    padding-top: 40px;
    ${down('lg')} {
      padding-left: 48px;
      padding-right: 48px;
    }
    ${down('md')} {
      order: 3;
      padding-left: 32px;
      padding-right: 32px;
    }
    p {
      max-width: 640px;
      color: var(--color-grey03);
    }
    .socials {
      display: flex;
      gap: 16px;
      padding-top: 40px;
      svg {
        width: 18px;
        height: 18px;
        path {
          fill: var(--color-white);
          transition: fill 0.25s ease-in;
        }
        &:hover {
          path {
            fill: var(--color-green);
            transition: fill 0.25s ease-out;
          }
        }
      }
    }
  }
`