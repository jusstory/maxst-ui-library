import styled, { css } from 'styled-components';
import { Sidebar } from '@maxst-designsystem/maxst-design-system';

export const SidebarStyle = styled(Sidebar)`
  ${({ theme }) => {
    return css`
      flex: none;
    `;
  }}
`;
