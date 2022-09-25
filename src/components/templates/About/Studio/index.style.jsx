import styled from "styled-components";
import { down } from "styled-breakpoints";

export const StudioTemplateStyle = styled.div`
  padding-bottom: 115px;
  .hero-container {
    padding: 175px 0 225px;
    background-color: var(--color-green);
    color: var(--color-black01);
    text-align: center;
    ${down('md')} {
      padding: 75px 0 175px;
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
  .projects-container {
    margin-top: -100px;
  }
  .contact-container {
    display: flex;
  }
`