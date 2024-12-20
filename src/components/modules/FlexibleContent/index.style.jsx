import styled from "styled-components";

export const FlexibleContentStyle = styled.div`
  margin: 80px 0;
  hr {
    display: none;
  }
  strong {
    font-weight: 700;
  }

  u {
    text-decoration: underline;
  }

  em {
    font-style: italic;
  }
  h1, h2, h3, h4, p, ul, ol {
    /* .container-module-small */
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    /* ---------------------- */
    padding-left: 25px;
    padding-right: 25px;
    color: var(--color-grey03);
  }
  h2:not(:first-child) {
    padding-top: 41.5px;
  }
  h4:not(:first-child), h3:not(:first-child), p:not(:first-child), ul:not(:first-child), ol:not(:first-child) {
    padding-top: 20px;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: auto;
  }
  li {
    margin-left: 25px;
    padding-left: 15px;
    padding-bottom: 10px;
  }
  h1, h2 {
    padding-bottom: 20px;
    /* .typographie-04 */
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: -0.02em;
    /* -------------- */
  }
  @media screen and (max-width: 905px) {
    h2 {
      font-size: 36px;
      line-height: 130%;
    }
  }
  h3, h4 {
    /* .typographie-14 */
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    /* -------------- */
  }
  p, li {
    /* .typographie-07 */
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    /* -------------- */
  }
  a {
    color: var(--color-grey03);
    /* .typographie-16 */
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    /* -------------- */
    text-decoration: underline;
    transition: all 0.25s ease-in;
  }
  a:hover {
    color: var(--color-green);
    transition: all 0.25s ease-out;
  }
  img {
    display: block;
    /* .container-module-medium */
    width: 100%;
    max-width: 858px;
    margin: 0 auto;
    /* ----------------------- */
    height: auto;
    // padding-left: 15px;
    // padding-right: 15px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 858px) {
    .container-image {
      width: calc(100% - 50px);
      margin-left: 25px;
      margin-right: 25px;
      padding-left: inherit;
      padding-right: inherit;
      overflow: hidden;
    }
    img {
      position: relative;
      left: 50%;
      max-width: 100%;
      transform: translate3D(-50%, 0, 0);
    }
  }
  img:not(:first-child) {
    padding-top: 60px;
  }
  iframe {
    display: block;
    /* .container-module-medium */
    width: 100%;
    max-width: 858px;
    margin: 0 auto;
    /* ----------------------- */
    height: 563px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 858px) {
    iframe {
      max-width: 100%;
      height: 66vw;
    }
  }
  @media screen and (max-width: 558px) {
    iframe {
      height: 79vw;
    }
  }
  iframe:not(:first-child) {
    padding-top: 60px;
  }
`