// styled-component
import styled, { css } from 'styled-components';
import { Container, Form } from '@maxst-designsystem/maxst-design-system';

const MyContainer = styled(Container)`
  ${({ theme }) => {
    return css`
      display: flex;
    `;
  }}
`;

const MyForm = styled(Form)`
  ${({ theme }) => {
    return css`
      padding-left: 50px;
    `;
  }}
`;

export { MyContainer, MyForm };
