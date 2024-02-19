// styled-component
import styled, { css } from 'styled-components';

export const CheckboxTouchBox = styled.div`
  ${({ theme }) => {
    return css`
      .mds-root .checkbox__l--default__primary::after {
        transition-property: background;
        transition-duration: 1s, 1s;
      }
      .mds-root .radio__l--default.checked::after{
        transition-property: border;
        transition-duration: 0.3s, 0.8s;

      }
      .mds-root .checkbox__l--default__primary.checked::after {
        /* animation: ripple-animation 0.6s linear; */
      }
      .on {
        .checkbox::before {
          transform: scale(0);
          animation: ripple-animation 0.6s linear; */
          background-color: rgba(255, 255, 255, 0.8);
          background-color: #0F9BB6; 
          pointer-events: none;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          opacity: 0.5;
        }
        .radio::before {
          transform: scale(0);
          animation: ripple-animation 0.6s linear; */
          background-color: rgba(255, 255, 255, 0.8);
          background-color: #0F9BB6; 
          pointer-events: none;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          opacity: 0.5;
          border-radius: 50%;

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

      @keyframes ripple-animation2 {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(0.3);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `;
  }}
`;
