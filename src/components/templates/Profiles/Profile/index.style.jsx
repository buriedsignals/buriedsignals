import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ProfileTemplateStyle = styled.div`
  .profile-container {
    display: flex;
    flex-direction: column;
    padding: 47.5px 0 160px; 
    ${down('md')} {
      padding: 80px 0; 
    } 
    .buttons-container {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 35px;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        order: 4; 
        justify-content: flex-start;
        margin-top: 55px;
        margin-bottom: 0;
        padding-left: 32px;
        padding-right: 32px;
      }
      .action-container {
        display: flex;
        li {
          &:not(:first-child) {
            margin-left: 20px;
          }
          .secondary-container {
            display: block;
            min-width: 90px;
            text-align: center;
          }
        }
      }
    }
    .name {
      margin-bottom: 34px;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        order: 1;
        padding-left: 32px;
        padding-right: 32px;
      }
    }
    .extras-container {
      margin-bottom: 35px;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        order: 2;
        padding-left: 32px;
        padding-right: 32px;
      }
      .social-container {
        display: flex;
        ${down('md')} {
          flex-direction: column;
        }
        li {
          display: flex;
          align-items: center;
          ${down('md')} {
            margin-top: 25px;
          }
          &:not(:first-child) {
            margin-left: 50px;
            ${down('md')} {
              margin-left: 0;
            }
          }
          .icon-container {
            position: relative;
            display: inline-block;
            background-color: inherit;
            border: 1px solid var(--color-grey01);
            border-radius: 5px;
            transition: all 0.25s ease-in;
            .icon {
              display: flex;
              align-items: center;
              padding: 9px 12px;
              svg {
                path {
                  transition: all 0.25s ease-in;
                }
              }
            }
          }
          p {
            margin-left: 12px;
          }
        }
      }
    }
    .description-container {
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        order: 3;
        padding-left: 32px;
        padding-right: 32px;
      }
      p {
        max-width: 640px;
        color: var(--color-grey03);
      }
    }
  }
`