// styled-component
import styled, { css } from 'styled-components';

export const SlideButtonStyles = styled.div`
  ${({ theme }) => {
    return css`
      height: 3.125rem;
      width: 3.125rem;
      background-color: transparent;
      border: none;
      padding: 0;
      cursor: pointer;

      .icon-container {
        --main-bg-color: #fff;
        --hover-color: #000;
        cursor: pointer;
        width: 50px;
        transition: -webkit-clip-path 1s;
        transition: clip-path 1s;
        transition:
          clip-path 1s,
          -webkit-clip-path 1s;

        img,
        svg {
          height: auto;
          max-width: 100%;
        }

        .mask {
          transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
          stroke: transparent;
          stroke-width: 20px;
          transform: translateX(-100%) rotate(-145deg) scaleY(0);
          transform-origin: 44% 107%;
          background-color: black;
        }

        &:hover {
          .mask {
            transform: translateX(85%) rotate(-145deg) scaleY(1);
          }
        }

        .border {
          stroke-dasharray: 299px 190px;
          stroke-dashoffset: -190px;
          fill: var(--main-bg-color);
          stroke: var(--hover-color);
          stroke-width: 1.5;
          transition: stroke-dashoffset 1s
            cubic-bezier(0.455, 0.03, 0.515, 0.955);

          stroke-dashoffset: 0;
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
