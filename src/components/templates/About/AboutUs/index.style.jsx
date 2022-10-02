import styled from "styled-components";
import { down } from "styled-breakpoints";

export const AboutUsTemplateStyle = styled.div`
  padding-bottom: 115px;
  .hero-container {
    padding: 175px 0;
    background-color: var(--color-green);
    color: var(--color-black01);
    text-align: center;${down('md')} {
      padding: 75px 0;
    }
    & > .title {
      width: auto;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        padding-left: 32px;
        padding-right: 32px;
        font-size: 36px;
        line-height: 130%;
      }
    }
  }
  & > .flexible-container {
    h1, h2, h3, p, ul, ol, a, img, iframe {
      max-width: 848px;
    }
    h1 {
      font-size: 55px;
      padding-bottom: 41.5px;
    }
    h2 {
      font-size: 50px;
      padding-bottom: 41.5px;
    }
    h3 {
      font-size: 45px;
    }
    p, ul, ol, a {
      font-size: 20px;
      line-height: 38px;
    }
    a {
      position: relative;
      display: inline-block;
      color: var(--color-green);
      text-decoration: none;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #a0ffcc;
        transform-origin: 100% 50%;
        transform: scaleX(0);
        transition: transform .3s;
      }
    }
    a:hover {
      &::before {
        background: #a0ffcc;
        transform-origin: 0 50%;
        transform: scaleX(1);
      }
    }
  }
`