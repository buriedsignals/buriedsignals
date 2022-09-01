import styled from "styled-components";

export const ThirstyStyle = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: var(--color-${ (props) => props.color });
  border-radius: 4px;
  text-transform: capitalize;
  white-space: nowrap;
  transition: all 0.25s ease-in;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px; left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-${ (props) => props.color });
    transition: all 0.25s ease-in;
  }
  &:hover {
    color: var(--color-${ (props) => props.colorHover });
    transition: all 0.25s ease-out;
    &::after {
      background-color: var(--color-${ (props) => props.colorHover });
      transition: all 0.25s ease-out;
    }
  }
`