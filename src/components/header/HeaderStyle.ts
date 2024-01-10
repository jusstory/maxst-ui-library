// styled-component
import styled, { css } from 'styled-components';

export const HeaderStyles = styled.div`
  ${({ theme }) => {
    return css`
      & > div {
        display: flex;
        justify-content: start;
        align-items: center;
        position: relative;
      }
      .logo {
        padding-right: 28px;
      }
      .nav {
        display: flex;
        gap: 12px;
        width: 100%;

        & > div {
          padding: 10px 16px;
        }
      }
      .right-box {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .mobile__menu-button {
        display: none;
      }

      ${theme.media.tablet} {
        & > div {
          justify-content: center;
        }

        .nav {
          display: none;

          & + .right-box {
            display: none;
          }
        }

        .mobile__menu-button {
          display: block;
          position: absolute;
          left: 56px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    `;
  }}
`;
