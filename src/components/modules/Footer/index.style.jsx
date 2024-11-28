import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.footer`
  padding: 60px 72px;
  background-color: var(--color-black04);
  .footer-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 96px;
    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${down('md')} {
        flex-direction: column;
        align-items: flex-start;
        gap: 96px;
      }
      .socials {
        display: flex;
        gap: 24px;
        .network {
          display: flex;
          justify-content: center;
          align-items: center;    
          width: 23px;
          height: 23px;
          svg {
            path {
              fill: var(--color-white);
              transition: fill 0.25s ease-in;
            }
          }
          &:hover {
            svg {
              path {
                fill: var(--color-green);
                transition: fill 0.25s ease-out;
              }
            }
          }
        }
      }
      .buried {
        display: flex;
        gap: 50px;
        ${down('md')} {
          flex-direction: column;
          align-items: flex-start;
          gap: 26px;
        }
        a {
          color: var(--color-white);
          transition: color 0.25s ease-in;
          &:hover {
            color: var(--color-green);
            transition: color 0.25s ease-out;
          }
        }
      }
    }
    .infos {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      ${down('md')} {
        flex-direction: column;
        align-items: flex-start;
        gap: 96px;
      }
      .legal {
        display: flex;
        flex-direction: column;
        gap: 16px;
        a {
          color: var(--color-white);
          transition: color 0.25s ease-in;
          &:hover {
            color: var(--color-green);
            transition: color 0.25s ease-out;
          }
        }
        .copyright {
          color: #626262;
          a {
            color: #626262;
            text-decoration: underline;
            transition: color 0.25s ease-in;
            &:hover {
              color: var(--color-green);
              transition: color 0.25s ease-out;
            }
          }
        }
      }
      .logo {
        width: 108px;
        svg {
          rect, path {
            fill: var(--color-white);
            transition: fill 0.25s ease-in;
          }
        }
        &:hover {
          svg {
            rect, path {
              fill: var(--color-green);
              transition: fill 0.25s ease-out;
            }
          }
        }
      }
    }
  }
`