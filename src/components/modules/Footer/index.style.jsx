import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 60px 36px;
  background-color: var(--color-black04);
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 310px;
    margin: 0 auto;
    .socials {
      display: flex;
      margin-bottom: 60px;
      .social {
        &:not(:nth-child(1)) {
          margin-left: 27.5px;
        }
        a {
          display: inline-flex;
          svg {
            path {
              transition: fill 0.25s ease-in;
            }
          }
          &:hover {
            svg {
              path {
                fill: var(--color-green);
                transition: all 0.25s ease-out;
              }
            }
          }
        }
      }
    }
    .logo {
      margin-bottom: 22.5px;
    }
    .copyright {
      padding: 0 36px;
      color: var(--color-grey01);
      text-align: center;
      a {
        color: var(--color-grey01);
        text-decoration: underline;
        transition: all 0.25s ease-in;
        &:hover {
          color: var(--color-green);
          transition: all 0.25s ease-out;
        }
      }
    }
  }
`