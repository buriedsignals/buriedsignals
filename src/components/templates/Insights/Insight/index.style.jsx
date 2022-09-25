import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InsightTemplateStyle = styled.div`
  padding: 47.5px 0;
  .banner-container {
    a {
      ${down('md')} {
        width: 100%;
      }
    }
  }
  .article-container {
    margin-top: 80px;
    h2, p {
      // .container-module-small //
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      // ---------------------- //
      padding-left: 25px;
      padding-right: 25px;
      &:not(:first-child) {
        padding-top: 20px;
      }
      color: var(--color-grey03);
    }
    h2 {
      // .typographie-14 //
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      // -------------- //
    }
    p {
      // .typographie-07 //
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 25px;
      // -------------- //
    }
    a {
      color: var(--color-grey03);
      // .typographie-16 //
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      // -------------- //
      text-decoration: underline;
      transition: all 0.25s ease-in;
      &:hover {
        color: var(--color-green);
        transition: all 0.25s ease-out;
      }
    }
    img {
      display: block;
      // .container-module-medium //
      width: 100%;
      max-width: 858px;
      margin: 0 auto;
      // ----------------------- //
      height: auto;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 40px;
      &:not(:first-child) {
        padding-top: 60px;
      }
    }
  }
  .back-container {
    padding-left: 25px;
    padding-right: 25px;
    .secondary-container {
      padding: 12px 20px;
    }
  }
`