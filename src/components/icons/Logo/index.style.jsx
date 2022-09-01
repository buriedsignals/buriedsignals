import styled from "styled-components";

export const LogoStyle = styled.svg`
  &.logo-long {
    .icon {
      fill: var(--color-green);
    }
    .text {
      fill: var(--color-white);
    }
  }
  &.logo-large {
    path {
      fill: var(--color-white);
    }
  }
  &.logo-default {
    path {
      fill: var(--color-green);
    }
  }
`