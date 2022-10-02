import styled from "styled-components";

export const ThirstyStyle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: var(--color-${ (props) => props.color });
  border-radius: 4px;
  text-transform: capitalize;
  white-space: nowrap;
  transition: all 0.25s linear;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7.5px;
    width: 100%;
    height: 2.5px;
    background-color: var(--color-${ (props) => props.color });
    transform-origin: 100% 50%;
    transform: scaleX(1);
    transition: all .25s linear .125s;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7.5px;
    width: 100%;
    height: 2.5px;
    background-color: var(--color-${ (props) => props.color });
    transform-origin: 0 50%;
    transform: scaleX(0);
    transition: all .25s linear;
  }
  &:hover {
    color: var(--color-${ (props) => props.colorHover });
    transition: all 0.25s linear;
    &::before {
      background-color: var(--color-${ (props) => props.colorHover });
      transform-origin: 100% 50%;
      transform: scaleX(0);
      transition: all .25s linear;
    }
    &::after {
      background-color: var(--color-${ (props) => props.colorHover });
      transform-origin: 0 50%;
      transform: scaleX(1);
      transition: all .25s linear .125s;
    }
  }
`