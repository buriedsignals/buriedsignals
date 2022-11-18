import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InsightTemplateStyle = styled.div`
  padding-top: 47.5px;
  .links-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    ${down('lg')} {
      padding: 0 16px;
    }
    .secondary-container {
      .arrow {
        transform: rotate3D(0, 0, 1, 90deg);
      }
    }
    .share-container {
      display: flex;
      align-items: center;
      & > *:not(:first-child) {
        margin-left: 7.5px;
      }
    }
  }
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
    padding: 25px 0;
    background-color: var(--color-black03);
    ${down('md')} {
      padding: 25px 16px;
    }
    & > div {
      display: flex;
      flex-wrap: wrap;
      row-gap: 10px;
      justify-content: space-between;
      align-items: center;
    }
    .secondary-container {
      .arrow {
        transform: rotate3D(0, 0, 1, 90deg);
      }
    }
    .interact-container {
      display: flex;
      align-items: center;
      & > a {
        margin-right: 30px;
        ${down('md')} {
          margin-right: 15px;
        }
        ${down('sm')} {
          margin-right: 0;
        }
        .secondary-container {
          padding: 13px;
        }
      }
      & > button {
        ${down('sm')} {
          display: none;
        }
      }
      & > p {
        max-width: 126px;
        margin-left: 10px;
        text-transform: uppercase;
        ${down('md')} {
          display: none;
        }
      }
    }
    .share-container {
      display: flex;
      align-items: center;
      & > *:not(:first-child) {
        margin-left: 7.5px;
      }
    }
  }
`