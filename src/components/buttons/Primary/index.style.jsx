import styled from "styled-components";

export const PrimaryStyle = styled.button`
  display: flex;
  align-items: center;
  padding: 13px 36px;
  background-color: var(--color-${ (props) => props.color });
  border: 1px solid var(--color-${ (props) => props.color });
  border-radius: 4px;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.25s ease-in;
  &:hover {
    background-color: inherit;
    border: 1px solid var(--color-${ (props) => { 
      switch (props.color) {
        case "black03":
          return "white";
        default:
          return props.color;
      }
    }});
    transition: all 0.25s ease-out;
    & > * {
      color: var(--color-${ (props) => { 
        switch (props.color) {
          case "black03":
            return "white";
          default:
            return props.color;
        }
      }}) !important;
      transition: all 0.25s ease-out;
    }
  }
  & > * {
    &:not(:last-child) {
      margin-right: 12.5px;
    }
    color: var(--color-${ (props) => { 
      switch (props.color) {
        case "green":
          return "black02";
        case "blue": case "black03":
          return "white";
        case "white":
          return "black02";
      }
    }}) !important;
    transition: all 0.25s ease-in;
  }
`