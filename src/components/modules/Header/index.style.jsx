import { down } from "styled-breakpoints";
import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: relative;
  padding-bottom: 86px;
  header {
    top: -86px;
    transition: top 0.25s ease;
  }
  &.header-complex {
    header {
      top: -145px;
      transition: top 0.25s ease;
    }
  }
  ${down('md')} {
    padding-bottom: 66px;
    header {
      top: -66px;
      transition: top 0.25s ease;
      &.header-complex {
        top: -145px;
      }
    }
    &.header-complex {
      header {
        top: -145px;
        transition: top 0.25s ease;
      }
    }
  }
  &.is-stick {
    header {
      top: 0;
      transition: top 0.25s ease;
    }
  }
`