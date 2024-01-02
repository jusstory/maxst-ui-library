// styled-component
import styled, { css } from 'styled-components';

export const ContainerStyles = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding-left: 56px;
      padding-right: 56px;
      box-sizing: border-box;
      margin-top: 40px;

      .mds-sidebar {
      }

      ${theme.media.table} {
      }
    `;
  }}
`;
