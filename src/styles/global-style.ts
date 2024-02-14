import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';
import { theme } from '@styles/theme';
const { colors, media } = theme;

export const GlobalStyle = createGlobalStyle`${css`
  ${reset}
  /* CSS 초기화 */
  * {
    box-sizing: border-box;
    word-break: keep-all;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  html {
    width: 100%;
  }

  body {
    min-width: 360px;
    line-height: 1.25;

    & > div {
      position: relative;
    }
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  main {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: 'Pretendard', sans-serif;
    vertical-align: baseline;

    color: ${colors.gray.darker};

    /* color: red; */
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* button, input, select, textarea 초기화 */
  button,
  input,
  select,
  textarea {
    padding: 0;
    margin: 0;
    border-radius: 0;
    vertical-align: middle;
    font-size: 100%;
    font-family: 'Pretendard', sans-serif;
    background: transparent;
  }

  button,
  input[type='button'] {
    border: 0 none;
  }

  button {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input:focus {
    outline: none;
  }

  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear {
    display: none;
  }

  /* input type number 에서 화살표 제거 */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  textarea {
    resize: none;
    -webkit-appearance: none;
  }

  a {
    color: ${colors['palette-blue']};
    text-decoration: none;
    outline: none;

    &:hover,
    &:active {
      color: ${colors['palette-blue']};
      text-decoration: none;
    }
  }

  b {
    font-weight: 700;
  }

  pre {
    white-space: pre-wrap;
  }

  .ant-layout {
    background-color: ${colors.white};
  }

  .ant-typography {
    color: ${colors.gray.darker};
  }

  // checkbox
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-checked::after {
    border-color: ${colors.primary.default};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${colors.primary.default};
    border-color: ${colors.primary.default};
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${colors.primary.default};
  }

  // paging
  .ant-pagination-item-active,
  .ant-pagination-item:hover {
    border-color: ${colors.primary.default};
  }

  .ant-pagination-item-active a,
  .ant-pagination-item-active:hover a {
    color: ${colors.primary.default};
  }

  // form
  .ant-input,
  .ant-input-group-addon,
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${colors.gray.low};
  }

  // form input 안내/에러 메세지
  form {
    div {
      color: ${colors.gray.mid};

      &.ant-form-item-explain-error {
        color: ${colors.alert};
      }
    }
  }

  .ant-form-item-explain,
  .ant-form-item-extra {
    font-size: 12px;
  }

  // tooltip
  .ant-tooltip-inner {
    padding: 10px;
    color: ${colors.gray.darker};
    text-align: center;
    border: 1px solid ${colors.gray.darker};
    box-shadow: none;
    background-color: ${colors.white};
  }

  .ant-tooltip-arrow {
    display: none;
  }

  // dropdown menu
  .ant-dropdown {
    min-width: 118px !important;

    & > ul {
      padding: 4px 0;
      border: 1px solid ${colors.gray.darker};

      .ant-menu-item {
        height: auto;
        padding: 5px 12px;
        margin: 0;
        line-height: 22px;

        &:hover,
        &:focus,
        &:active {
          background-color: ${theme.colors.hover};
        }

        button,
        a {
          width: 100%;
          height: 100%;
          text-align: left;
          line-height: 1;

          &:hover,
          &:focus,
          &:active {
            color: ${theme.colors.gray.darker};
          }
        }

        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: ${theme.colors.hover};
    }
  }

  // table
  .ant-table-thead > tr > th,
  .ant-table tfoot > tr > th {
    padding: 11px 16px;
  }

  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > td {
    padding: 20px 16px;
  }

  // button
  .ant-btn-text {
    border: 0 none;
  }

  .ant-typography mark {
    color: ${colors.alert};
    background-color: transparent;
  }

  // summernote
  .note-editor.note-frame .note-statusbar {
    display: none;
  }

  // massage
  .ant-message .anticon {
    vertical-align: text-bottom;

    & + span {
      vertical-align: middle;
    }
  }

  .primary-text {
    color: ${colors.primary.default} !important;
  }

  .icon-library-area {
    svg {
      width: 28px;
      height: 28px;
    }
  }

  ${media.tablet} {
    .ant-dropdown {
      max-width: 320px;
      width: 100%;
      padding: 0 30px;
      left: 50%;

      ul {
        // 공간맵 저작도구 dropdown option
        &.authoring_tool_dropdown_option {
        }
      }
    }
  }
`}
`;
