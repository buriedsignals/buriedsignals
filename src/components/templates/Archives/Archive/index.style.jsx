import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ArchiveTemplateStyle = styled.div`
  .link-container {
    margin: 20px 0;
    padding: 0 16px;
    .secondary-container {
      .arrow {
        transform: rotate3D(0, 0, 1, 90deg);
      }
    }
  }
  .archive {
    width: 100vw;
    height: calc(100vh - 89px);
  }
`