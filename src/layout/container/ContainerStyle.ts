// styled-component
import styled, { css } from 'styled-components';
import { Container, Form } from '@maxst-designsystem/maxst-design-system';

const MyContainer = styled(Container)`
  ${({ theme }) => {
    return css`
      display: flex;

      /* .mds-sidebar {
        flex: none;
      } */
      ${theme.media.tablet} {
      }
    `;
  }}
`;

const MyForm = styled(Form)`
  ${({ theme }) => {
    return css`
      padding-left: 50px;

      .dropdown__phon-num {
        width: 100px !important;
        flex: none;
      }
    `;
  }}
`;

const LottieSampleBox = styled.div`
  ${({ theme }) => {
    return css`
      width: 300px;

      .hamster {
        &:hover {
          cursor: grab;
        }
      }
    `;
  }}
`;

export { MyContainer, MyForm, LottieSampleBox };
