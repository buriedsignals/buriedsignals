import styled from "styled-components";

export const AwardsStyle = styled.div`
  position: relative;
  z-index: 3;
  .modal {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    border: 1px solid var(--color-grey01);
    border-radius: 4px;
    z-index: 2;
    svg {
      margin-left: 7.5px;
      transform-origin: center;
      transform: rotate3D(0, 0, 1, 0deg);
      transition: all 0.2s linear;
    }
    p {
      width: 51px;
      text-align: left;
      text-transform: uppercase;
      pointer-events: none;
    }
    &.is-open {
      border: 1px solid transparent;
      svg {
        transform-origin: center;
        transform: rotate3D(0, 0, 1, -180deg);
        transition: all 0.2s linear;
      }
    }
  }
  .panel {
    position: absolute;
    top: 0; right: 0;
    padding: 25px 18px 15px 21.5px;
    background: var(--color-black01);
    border: 1px solid var(--color-grey01);
    border-radius: 4px;
    .awards {
      .award {
        button {
          margin-top: 20px;
          &.is-active {
            display: none;
            p {
              color: var(--color-white);
            }
          }
          p {
            width: 51px;
            color: var(--color-grey01);
            text-transform: uppercase;
            text-align: left;
            white-space: nowrap;
            pointer-events: none;
            transition: all 0.25s ease-in;
          }
          &:hover {
            p {
              color: var(--color-white);
              transition: all 0.25s ease-out;
            }
          }
        }
      }
    }
  }   
`