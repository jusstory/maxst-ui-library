// styled-component
import styled, { css } from 'styled-components';

export const SlideButtonStyles = styled.div`
  ${({ theme }) => {
    return css`
      height: 50px;
      width: 50px;
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;

      .icon-container {
        --bg-color: #fff;
        --hover-color: #000;

        width: 50px;
        transition: -webkit-clip-path 1s;
        transition: clip-path 1s;
        transition:
          clip-path 1s,
          -webkit-clip-path 1s;
        cursor: pointer;

        svg {
          height: auto;
          max-width: 100%;
        }

        .mask {
          stroke: transparent;
          stroke-width: 20px;
          transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
          transform: translateX(-100%) rotate(-145deg) scaleY(0);
          transform-origin: 44% 107%;
          background-color: var(--hover-color);
        }

        &:hover {
          .mask {
            transform: translateX(85%) rotate(-145deg) scaleY(1);
          }
        }

        .border {
          stroke-dasharray: 299px 190px;
          stroke-dashoffset: -190px;
          stroke: var(--hover-color);
          stroke-width: 1.5;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1s
            cubic-bezier(0.455, 0.03, 0.515, 0.955);
          fill: var(--bg-color);
        }
        .hover .border {
          fill: var(--hover-color);
        }
      }

      ${theme.media.tablet} {
      }
    `;
  }}
`;
