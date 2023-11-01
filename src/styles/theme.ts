import { DefaultTheme } from 'styled-components';

const mediaSizes = {
  mobile: 767,
  tablet: 1279,
  desktop: 1280,
  desktopMax: 1920,
};

/**
 * @description 기존 ui 호환을 위한 미디어 쿼리 범위
 * 디바이스 별 범위가 겹쳐 있는 형태
 */
const media = {
  desktopOnly: `@media only screen and (min-width: ${mediaSizes.desktopMax}px)`, // 1920 이하
  desktop: `@media only screen and (max-width: ${mediaSizes.desktopMax}px)`, // 1920 이하
  tablet: `@media only screen and (max-width: ${mediaSizes.tablet}px)`, // 1280 미만
  mobile: `@media only screen and (max-width: ${mediaSizes.mobile}px)`, // 767 미만
};

/**
 * @description renewal0.1
 * 디바이스 별 범위가 구분 되어 있는 형태
 */
const mediaQuery = {
  desktop: `@media only screen and (min-width: 1280px)`,
  tablet: `@media only screen and (min-width: 768px) and (max-width: 1279px)`,
  mobile: `@media only screen and (max-width: 767px)`,
};

const colors = {
  primary: {
    default: '#5F51FB',
    low: '#AB9BFB',
    dark: '#3A2EC3',
    disabled: '#E1DFEE',
  },
  alert: '#FB0C1A',
  link: '#008FFD',
  white: '#FFFFFF',
  gray: {
    darker: '#252525',
    dark: '#4A4A4A',
    mid: '#9C9A9A',
    low: '#C8C8C8',
    light: '#DEDEDE',
  },
  blue: {
    primary: '#3968ED',
    low: '#5A7CE3',
    dark: '#1C41AF',
    disabled: '#DCDCDC',
  },
  black: '#000000',
  background: '#F7F8F8',
  background2: '#E8F2FF',
  outline: '#EFEFEF',
  disabled: '#E4E4E4',
  button: {
    default: '#424242',
    soft: '#F2F2F2',
  },
  selected: '#F6F3FF',
  hover: '#F9F9F9',
  table: {
    background: '#FAFAFA',
  },
  'palette-gray-900': '#222222',
  'palette-gray-800': '#424242',
  'palette-gray-700': '#606060',
  'palette-gray-600': '#818181',
  'palette-gray-500': '#9E9E9E',
  'palette-gray-400': '#C2C2C2',
  'palette-gray-300': '#DEDEDE',
  'palette-gray-200': '#F0F0F0',
  'palette-gray-100': '#F5F5F5',
  'palette-gray-50': '#FAFAFA',
  'palette-white': '#FFFFFF',
  'palette-black': '#000000',
  'palette-mint-900': '#0F9BB6',
  'palette-mint-800': '#0EADCA',
  'palette-mint-700': '#0FBED7',
  'palette-mint-600': '#0FCBDD',
  'palette-mint-500': '#1DD9E7',
  'palette-mint-400': '#43DFEB',
  'palette-mint-300': '#73E7F0',
  'palette-mint-200': '#99EEF4',
  'palette-mint-100': '#BBF4F8',
  'palette-mint-50': '#DDF9FB',
  'palette-red': '#EA1B1B',
  'palette-red-accent': '#D80516',
  'palette-red-light': '#FFE9E9',
  'palette-orange': '#F97F0E',
  'palette-orange-light': '#FFEBD0',
  'palette-green': '#00C400',
  'palette-green-light': '#DBF1DB',
  'palette-blue': '#109EFF',
  'palette-blue-light': '#CEF1FF',
  'palette-purple': '#E59BFF',
  'palette-magenta': '#F567AC',
  'palette-navy': '#465563',
  'palette-footer-navy': '#212631',
  'plaette-footer-gray': '#8A98A6',
  'palette-xr-sdk-label-purple': '#3A2EC3',
  'palette-toast-success-border-color': '#00c400',
  'palette-toast-success-bg-color': '#dcf1db',
  'palette-toast-error-border-color': '#EA1B1B',
  'palette-toast-error-bg-color': '#ffe9e9',
  'palette-toast-waring-border-color': '#F97F0E',
  'palette-toast-waring-bg-color': '#ffebd1',
  'palette-toast-info-border-color': '#109EFF',
  'palette-toast-info-bg-color': '#e2f2ff',
  'palette-toast-init-color': 'none',
};

const theme: DefaultTheme = {
  basicWidth: '1920',
  mediaSizes,
  media,
  mediaQuery,
  colors,
};

export { theme };
