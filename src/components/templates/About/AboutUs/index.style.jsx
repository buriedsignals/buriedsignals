import styled from "styled-components";
import { down } from "styled-breakpoints";

export const AboutUsTemplateStyle = styled.main`
  padding-bottom: 115px;
  .hero-container {
    padding: 175px 0;
    background-color: var(--color-green);
    color: var(--color-black01);
    text-align: center;${down('md')} {
      padding: 75px 0;
    }
    & > .title {
      width: auto;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        padding-left: 32px;
        padding-right: 32px;
        font-size: 36px;
        line-height: 130%;
      }
    }
  }
`