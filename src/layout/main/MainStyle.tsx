// styled-component
import styled, { css } from 'styled-components';

const Main = styled.main`
  ${({ theme }) => {
    return css``;
  }}
`;

const Box = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;

      ${theme.media.tablet} {
        /* display: none; */
      }
    `;
  }}
`;

export { Main, Box };
