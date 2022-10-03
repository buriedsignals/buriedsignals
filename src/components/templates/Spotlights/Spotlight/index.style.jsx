import styled from "styled-components";
import { down } from "styled-breakpoints";

export const SpotlightTemplateStyle = styled.div`
  padding-top: 47.5px;
  .links-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    ${down('md')} {
      padding: 0 16px;
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
    display: flex;
    justify-content: center;
    a {
      ${down('md')} {
        width: 100%;
      }
    }
  }
  .profil-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    ${down('md')} {
      padding: 0 40px;
    }
    .submitted {
      margin-right: 15px;
      color: var(--color-grey01);
      text-align: right;
      text-transform: uppercase;
    }
    .photo-container {
      position: relative;
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%; left: 50%;
        height: 100%;
        width: auto;
        transform: translate3D(-50%, -50%, 0);
      }
    }
  }
`