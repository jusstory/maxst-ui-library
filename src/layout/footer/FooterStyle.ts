// styled-component
import styled, { css } from 'styled-components';

export const FooterStyles = styled.div`
  ${({ theme }) => {
    return css`
      ${theme.media.tablet} {
        //
      }
    `;
  }}
`;
