import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ProfileTemplateStyle = styled.div`
  .profile-container {
    display: flex;
    flex-direction: column;
    padding: 47.5px 0 90px; 
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
        order: 3; 
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
    .profile {
      display: flex;
      margin-bottom: 34px;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        padding-left: 32px;
        padding-right: 32px;
      }
      .name {}
      .type {
        display: flex;
        align-items: center;
        height: fit-content;
        margin-top: 10px;
        margin-left: 10px;
        color: var(--color-grey01);
        &::after {
          content: '';
          display: block;
          width: 6px;
          height: 3px;
          margin-bottom: 2.5px;
          margin-left: 5px;
          border-left: 1px solid var(--color-green);
          border-bottom: 1px solid var(--color-green);
          transform: rotate3D(0, 0, 1, -45deg);
        }
      }
    }
    // .extras-container {
    //   margin-bottom: 35px;
    //   ${down('lg')} {
    //     padding-left: 48px;
    //     padding-right: 48px;
    //   }
    //   ${down('md')} {
    //     order: 2;
    //     padding-left: 32px;
    //     padding-right: 32px;
    //   }
    //   .social-container {
    //     display: flex;
    //     ${down('md')} {
    //       flex-direction: column;
    //     }
    //     li {
    //       display: flex;
    //       align-items: center;
    //       ${down('md')} {
    //         margin-top: 25px;
    //       }
    //       &:not(:first-child) {
    //         margin-left: 50px;
    //         ${down('md')} {
    //           margin-left: 0;
    //         }
    //       }
    //       .icon-container {
    //         position: relative;
    //         display: inline-block;
    //         background-color: inherit;
    //         border: 1px solid var(--color-grey01);
    //         border-radius: 5px;
    //         transition: all 0.25s ease-in;
    //         .icon {
    //           display: flex;
    //           align-items: center;
    //           padding: 9px 12px;
    //           svg {
    //             path {
    //               transition: all 0.25s ease-in;
    //             }
    //           }
    //         }
    //       }
    //       p {
    //         margin-left: 12px;
    //       }
    //     }
    //   }
    // }
    .description-container {
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        padding-left: 32px;
        padding-right: 32px;
      }
      p {
        max-width: 640px;
        color: var(--color-grey03);
      }
    }
    .extras-container {
      margin-top: 111px;
      ${down('lg')} {
        padding-left: 48px;
        padding-right: 48px;
      }
      ${down('md')} {
        order: 4;
        padding-left: 32px;
        padding-right: 32px;
      }
      .extras {
        display: flex;
        flex-wrap: wrap;
        column-gap: 115px;
        row-gap: 32px;
        padding-top: 45px;
        border-top: 1px solid var(--color-black03);
        .subtitle {
          margin-bottom: 14px;
          color: var(--color-green);
        }
        .networks-container {
          display: flex;
          align-items: center;
          a {
            display: inline-block;
            width: 20px;
            height: 20px;
            &:not(:last-child) {
              margin-right: 12px;
            }
            &:hover {
              svg {
                path {
                  fill: var(--color-green);
                  transition: all 0.25s ease-in;
                }
              }
              &.portfolio {
                svg {
                  path {
                    fill: initial;
                    stroke: var(--color-green);
                    transition: all 0.25s ease-in;
                  }
                }
              }
            }
            &.portfolio {
              svg {
                width: 100%;
                height: 100%;
                path {
                  fill: initial;
                  stroke: var(--color-white);
                  transition: all 0.25s ease-in;
                }
              }
            }
            svg {
              width: 100%;
              height: 100%;
              path {
                fill: var(--color-white);
                transition: all 0.25s ease-in;
              }
            }
          }
        }
      }
    }
  }
`