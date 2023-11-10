import styled from "styled-components";
import { down } from "styled-breakpoints";

export const DirectoryTemplateStyle = styled.div`
  padding: 115px 0 57.5px;
  & > .title {
    width: auto;
    padding-bottom: 50px;
    ${down('lg')} {
      margin-left: 48px;
      margin-right: 48px;
    }
    ${down('md')} {
      margin-left: 32px;
      margin-right: 32px;
    }
  }
  & > .subtitle {
    width: auto;
    padding-bottom: 25px;
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