import styled from "styled-components";

export const SupporterStyle = styled.div`
  display: block;
  background-color: var(--color-black03);
  width: 308px;
  .supporter-container {
    height: 505px;
    padding: 25px;
    .visual-container, .content-container {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .visual-container {
      position: relative;
      width: 260px;
      height: 260px;
      border-radius: 100%;
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
      padding: 20px 8px;
      .informations-container {
        height: 156px;
        text-align: center;
        .title {
          margin-bottom: 25px;
          color: var(--color-white);
        }
        .description {
          color: var(--color-grey03);
        }
      }
    }
  }
`