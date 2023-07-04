import { down } from "styled-breakpoints";
import styled from "styled-components";

export const InformationStyle = styled.div`
  position: relative;
  z-index: 2;
  .modal {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      transition: all 0.05s ease-in-out;
    }
  }   
  .panel-information {
    position: relative;
  }
`