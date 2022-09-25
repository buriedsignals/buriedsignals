import styled from "styled-components";
import { down } from "styled-breakpoints";

export const SpotlightsTemplateStyle = styled.div`
  padding: 115px 0;
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
  }
`