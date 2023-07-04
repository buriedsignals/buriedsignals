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
      margin-left: 7.5px;
      transform-origin: center;
      transform: rotate3D(0, 0, 1, 0deg);
      transition: all 0.2s linear;
    }
    &.is-open {
      svg {
        transform-origin: center;
        transform: rotate3D(0, 0, 1, -180deg);
        transition: all 0.2s linear;
      }
    }
    &.is-active {
      p {
        color: var(--color-green);
      }
      svg {
        path {
          fill: var(--color-green);
        }
      }
    }
  }
  .panel {
    position: absolute;
    top: -12.5px; left: -12.5px;
    display: none;
    padding: calc(30px + 17.5px) 30px 17.5px;
    background: var(--color-black01);
    border: 1px solid var(--color-grey01);
    border-radius: 4px;
    &.is-show {
      display: block;
    }
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