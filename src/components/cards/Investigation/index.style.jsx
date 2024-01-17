import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InvestigationStyle = styled.a`
  display: block;
  background-color: var(--color-black03);
  ${down('md')} {
    width: 343px;
  }
  .investigation-container {
    display: flex;
    height: 302px;
    ${down('md')} {
      display: block;
      height: auto;
    }
    .visual-container, .content-container {
      width: 50%;
      height: 100%;
      overflow: hidden;
      ${down('md')} {
        width: 100%;
      }
    }
    .visual-container {
      position: relative;
      ${down('md')} {
        height: 218px;
      }
      img {
        position: absolute;
        top: 50%; left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate3D(-50%, -50%, 0);
      }
    }
    .content-container {    
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 32px 48px;
      ${down('md')} {
        padding: 41px 23px;
      }
      .extras-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 42.5px;
        color: var(--color-grey01);
        text-transform: uppercase;
        ${down('md')} {
          align-items: flex-start;
        }
        .author {
          margin-right: 22.5px;
          white-space: nowrap;
        }
      }
      .informations-container {
        height: 124px;
        margin-bottom: 20px;
        .title {
          margin-bottom: 12.5px;
          color: var(--color-white);
          // ${down('md')} {
            font-size: 18px;
            line-height: 24px;
          // }
        }
        .description {
          color: var(--color-grey03);
          // ${down('md')} {    
            font-size: 14px;
            line-height: 18px;
          // }
        }
      }
    }
  }
`