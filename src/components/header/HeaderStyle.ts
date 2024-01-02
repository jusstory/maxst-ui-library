// styled-component
import styled, { css } from 'styled-components';

export const HeaderStyles = styled.div`
  ${({ theme }) => {
    return css`
      padding: 8px 0;

      & > div {
        display: flex;
        justify-content: start;
        align-items: center;
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

      ${theme.media.table} {
      }
    `;
  }}
`;
