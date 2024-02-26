import styled from "styled-components";
import { down } from "styled-breakpoints";

export const SupportTemplateStyle = styled.div`
  padding: 115px 0;
  .support {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
    ${down('lg')} {
      width: calc(100% - 96px);
      margin-left: 48px;
      margin-right: 48px;
    }
    ${down('md')} {
      width: calc(100% - 64px);
      margin-left: 32px;
      margin-right: 32px;
    }
    .informations {
      & > .title {
        width: auto;
      }
      .description-container {
        padding-top: 40px;
        padding-bottom: 40px;
        p {
          max-width: 420px;
          color: var(--color-grey03);
          ${down('lg')} {
            max-width: 640px;
          }
          &:not(:last-child) {
            padding-bottom: 16px;
          }
        }
      }
      a {
        width: fit-content;
      }
    }
    .includes {
      width: 529px;
      padding: 32px;
      background-color: var(--color-black02);
      border-radius: 8px;
      ${down('lg')} {
        width: 100%;
      }
      & > p {
        color: var(--color-green);
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        padding-top: 24px;
        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          width: calc(100% - 6px);
          & > div {
            width: calc(50% - 6px);
            min-height: 120px;
            ${down('sm')} {
              width: calc(100% - 6px);
              height: auto;
              min-height: auto;
            }
          }
          &:last-child {
            & > div {
              width: 100%;
              min-height: auto;
            }
          }
        }
      }
    }
  }
  .supporter {
    padding-top: 125px;
    .title {
      width: auto;
      ${down('lg')} {
        margin-left: 48px;
        margin-right: 48px;
      }
      ${down('md')} {
        margin-left: 32px;
        margin-right: 32px;
      }
    }
  }
`