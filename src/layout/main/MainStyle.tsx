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
      .font-title {
        color: red;
      }
    `;
  }}
`;

export { Main, Box };
