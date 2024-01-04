// styled-component
import styled, { css } from 'styled-components';
import { Container } from '@maxst-designsystem/maxst-design-system';

const MyContainer = styled(Container)`
  ${({ theme }) => {
    return css`
      display: flex;
    `;
  }}
`;

export { MyContainer };
