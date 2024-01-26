// styled-component
import styled, { css } from 'styled-components';
import { Checkbox } from '@maxst-designsystem/maxst-design-system';

export const CheckboxTouchBox = styled.div`
  ${({ theme }) => {
    return css`
      .on {
        .checkbox::before {
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          // background-color: rgba(255, 255, 255, 0.8);
          background-color: red;
          pointer-events: none;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          opacity: 0.5;
        }
      }

      @keyframes ripple-animation {
        50% {
          transform: scale(0.5);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
    `;
  }}
`;
