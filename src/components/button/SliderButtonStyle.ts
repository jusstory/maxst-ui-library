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

export const PolygonButton = styled.div`
  ${({ theme }) => {
    return css`
      width: 280px;
      height: 120px;
      clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 50%);
      background-color: gray;
      overflow: hidden;

      button {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: white;
        clip-path: polygon(
          calc(25% + 1px) 2px,
          calc(100% - 2px) 2px,
          calc(100% - 2px) calc(100% - 2px),
          2px calc(100% - 2px),
          2px calc(50% + 1px)
        );

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 150%;
          height: 300%;
          background-color: purple;
          transform: translateX(-90%) translateY(15%) rotate(45deg) scaleY(1);
          transition: transform 0.4s;
          opacity: 0.5;
        }

        &:hover {
          &::before {
            transform: translateX(-10%) translateY(-30%) rotate(45deg) scaleY(1);
          }
        }
      }
    `;
  }}
`;
