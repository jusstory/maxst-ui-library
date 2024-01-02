// styled-component
import styled, { css } from 'styled-components';

export const ContentRightBoxStyle = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      padding-bottom: 160px;

      & > div {
        margin-top: 0;
      }
      ${theme.media.table} {
      }
    `;
  }}
`;

export const ContentHeaderStyle = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      padding-bottom: 14px;

      & > div {
        margin-top: 0;
      }

      .font-title {
        margin-top: 20px;
        margin-bottom: 38px;
      }

      /* .mds-divider {
        margin: 0;
      } */

      .search-wrap {
        position: absolute;
        right: 0;
        bottom: 14px;
      }

      ${theme.media.table} {
      }
    `;
  }}
`;

export const ButtonBox = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: 8px;
      align-items: center;

      .checkbox-wrap {
        margin-right: 12px;
      }

      ${theme.media.table} {
      }
    `;
  }}
`;

export const TableBoxStyle = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;

      .mds-box-group {
        margin-top: 20px;
        justify-content: space-between;
        .button__icon-ghost-l--default.icon-button-only {
          svg {
            color: #9e9e9e;
          }
        }
      }

      .mds-table-wrap {
        margin-top: 48px;

        svg {
          width: 24px;
          height: 24px;
        }

        .more-button {
          svg {
            width: 24px;
            height: 24px;
          }
        }

        .progress-box {
          display: flex;
          gap: 4px;
          align-items: center;

          .icon-finished {
            svg {
              width: 20px;
              height: 20px;
              color: #109eff;
            }
          }
        }
      }

      ${theme.media.table} {
      }
    `;
  }}
`;
