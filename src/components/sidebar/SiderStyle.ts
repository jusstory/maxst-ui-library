import styled, { css } from 'styled-components';
import { Sidebar } from '@maxst-designsystem/maxst-design-system';

export const SidebarStyle = styled(Sidebar)`
  ${({ theme }) => {
    return css`
      flex: none;

      ${theme.media.tablet} {
        display: none;
      }
    `;
  }}
`;

export const HeaderSidebarStyle = styled(Sidebar)`
  ${({ theme }) => {
    return css`
      width: 100%;
      margin-top: 60px;

      ${theme.media.tablet} {
      }
    `;
  }}
`;
