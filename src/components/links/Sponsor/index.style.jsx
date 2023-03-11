import styled from "styled-components";

export const SponsorStyle = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  background: var(--color-black03);
  border-radius: 4px;
  transition: all 0.25s linear;
  svg {
    width: 24px;
    height: 24px;
  }
  & > .text {
    display: flex;
    flex-direction: column;
    min-width: 140px;
    color: var(--color-green) !important;
    transition: all 0.25s linear;
    span {
      &:last-child {
        text-transform: uppercase;
      }
    }
  }
  &:hover {
    & > .text {
      color: var(--color-white) !important;
      transition: all 0.25s linear;
    }
  }
`