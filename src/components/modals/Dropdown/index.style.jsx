import styled from "styled-components";

export const DropdownStyle = styled.div`
  position: relative;
  z-index: 2;
  .modal {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 2;
    svg {
      margin-right: 7.5px;
      transition: all 0.05s ease-in-out;
    }
    &.is-open {
      svg {
        transform: rotate3D(0, 0, 1, -180deg);
        transition: all 0.05s ease-in-out;
      }
    }
  }
  .panel {
    position: absolute;
    top: -12.5px; left: -12.5px;
    padding: 43px 26px 12.5px 28px;
    background: var(--color-black01);
    border: 1px solid var(--color-grey01);
    border-radius: 4px;
    .links {
      .link {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        p {
          color: var(--color-white);
          white-space: nowrap;
        }
      }
    }
  }   
`