import styled from "styled-components";

export const ProfileStyle = styled.a`
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%; left: 50%;
    width: 100%;
    transform: translate3D(-50%, -50%, 0);
  }
`