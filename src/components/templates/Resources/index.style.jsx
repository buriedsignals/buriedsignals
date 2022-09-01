import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ResourcesTemplateStyle = styled.main`
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
`