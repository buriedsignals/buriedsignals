import styled from "styled-components";

export const AwardsStyle = styled.div`
  position: relative;
  z-index: 2;
  .modal {
    position: relative;
    display: flex;
    align-items: center;
    padding: 9px 12.5px;
    border: 1px solid var(--color-grey01);
    border-radius: 4px;
    z-index: 2;
    svg {
      margin-right: 7.5px;
      transition: all 0.05s ease-in-out;
    }
    p {
      text-transform: uppercase;
      pointer-events: none;
    }
    &.is-open {
      border: 1px solid transparent;
      svg {
        transform: rotate3D(0, 0, 1, -180deg);
        transition: all 0.05s ease-in-out;
      }
    }
  }
  .panel {
    position: absolute;
    top: 0; left: 0;
    padding: 40px 26px 12.5px 28px;
    background: var(--color-black01);
    border: 1px solid var(--color-grey01);
    border-radius: 4px;
    .awards {
      .award {
        &:not(:last-child) button {
          margin-bottom: 20px;
        }
        button {
          &.is-active {
            display: none;
            p {
              color: var(--color-white);
            }
          }
          p {
            color: var(--color-grey01);
            text-transform: uppercase;
            white-space: nowrap;
            pointer-events: none;
          }
        }
      }
    }
  }   
`