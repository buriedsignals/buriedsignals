import { down } from "styled-breakpoints";
import styled from "styled-components";

export const ExpertisesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0 !important;
  .expertises-container {
    width: 100%;
    .input-checkbox {
      position relative;
      max-height: 0px;
      margin-top: 0 !important;
      padding: 0 16px !important;
      border-width: 0 !important;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      transition: all 0.5s ease-out;
      &.is-checked {
        max-height: 53px;
        margin-top: 15px !important;
        padding: 16px 16px !important;
        border-width: 1px !important;
        opacity: 1;
        visibility: visible;
        transition: all 0.5s ease-in;
      }
      & > * {
        pointer-events: none;
      }
      input {
        opacity: 0;
        pointer-events: none;
        transition: all 0.5s ease-out;
      }
      &::before, &::after {
        content: "";
        position: absolute;
        top: 50%; right: 16px;
        display: block;
        width: 9px;
        height: 1px;
        background: var(--color-grey01);
        transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, -45deg);
        opacity: 1;
        pointer-events: initial;
        transition: all 0.5s ease-in;
      }
      &::after {
        transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 45deg);
      }
    }
  }
  .button-modal {
    position: relative;
    width: 40px;
    height: 40px;
    min-width: auto;
    margin-top: 16px;
    border-radius: 100%;
    border: 1px solid var(--color-black03);
    transition: all 0.25s ease-out;
    &::before, &::after {
      content: "";
      position: absolute;
      top: 50%; left: 50%;
      display: block;
      width: 8px;
      height: 2px;
      background: var(--color-white);
      transform: translate3D(-50%, -50%, 0);
      transition: all 0.25s ease-out;
    }
    &::after {
      transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 90deg);
    }
    &:hover {
      border: 1px solid var(--color-green);
      transition: all 0.25s ease-in;
      &::before, &::after {
        background: var(--color-green);
        transition: all 0.25s ease-in;
      }
    }
  }
  &.is-open {
    .expertises-container {
      .input-checkbox {
        max-height: 53px;
        margin-top: 15px !important;
        padding: 16px 16px !important;
        border-width: 1px !important;
        opacity: 1;
        visibility: visible;
        transition: all 0.5s ease-in;
        input {
          opacity: 1;
          pointer-events: initial;
          transition: all 0.5s ease-out;
        }
        &::before, &::after {
          opacity: 0;
          pointer-events: none;
          transition: all 0.5s ease-in;
        }
      }
    }
    .button-modal {
      &::before {
        transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, -180deg);
        transition: all 0.25s ease-in;
      }
      &::after {
        transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 0deg);
        transition: all 0.25s ease-in;
      }
    }
  }
`