import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Error404TemplateStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 89px - 264.5px);
  padding: 115px 0;
  ${down('md')} {
    flex-direction: column;
    padding: 95px 0;
  }
  & > .title {
    position: relative;
    width: auto;
    margin-right: 30px;
    color: var(--color-green);
    ${down('lg')} {
      margin-left: 48px;
      margin-right: 48px;
    }
    ${down('md')} {
      margin-left: 32px;
      margin-right: 32px;
      font-size: 140px;
    }
  }
  .description-container {
    position: relative;
    padding-top: 40px;
    ${down('lg')} {
      padding-left: 48px;
      padding-right: 48px;
    }
    ${down('md')} {
      padding-left: 32px;
      padding-right: 32px;
      text-align: center;
    }
    & > p {
      max-width: 640px;
      color: var(--color-grey03);
      ${down('md')} {
        max-width: 75%;
        margin: 0 auto;
        font-size: 28px;
        line-height: 31px;
      }
      ${down('sm')} {
        max-width: 100%;
      }
    }
    .back {
      position: absolute;
      bottom: -30px;
      transform: translate3D(0, 100%, 0);
      ${down('md')} {
        position: relative;
        bottom: inherit;
        margin-top: 30px;
        transform: inherit;
      }
      .secondary-container {
        .arrow {
          transform: rotate3D(0, 0, 1, 90deg);
        }
      }
    }
  }
  .title-image {
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 44vw;
    height: 100px;
    transform: translate3D(0, 100%, 0);
    overflow: hidden;
    ${down('lg')} {
      width: 47vw;
    }
  }
  .lines {
    position: absolute;
    left: 0;
    width: 47vw;
    min-width: 875px;
    height: auto;
    ${down('md')} {
      display: none;
    }
  }
`