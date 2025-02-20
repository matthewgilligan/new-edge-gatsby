import * as styled from 'styled-components';

import Grafier from 'assets/Fonts/PPGrafier-Regular.otf';
import RadioGrotesk from 'assets/Fonts/PPRadioGrotesk-Regular.otf';

import { defaultTheme } from './theme';

const typedTheme: styled.DefaultTheme = defaultTheme;

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Grafier';
    src: url(${Grafier}) format('woff');
  }

  @font-face {
    font-family: 'Radio Grotesk';
    src: url(${RadioGrotesk}) format('woff');
  }

  *,
  html,
  body {
    margin: 0;
    font-family: 'Radio Grotesk', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }

  html,
  body,
  #root,
  main div,
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
  font,
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
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3 {
    color: black;
    font-family: 'Radio Grotesk';
    line-height: 1.1;
  }

  section {
    margin: 6rem 0 10rem;
  }

  aside {
    margin: 4rem 0;
  }

  h1 {
    font-size: 7rem;
    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 4.6rem;
    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 3rem;
    margin: 2.4rem 0;
    line-height: 1.4;
    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      font-size: 2.4rem;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 2.4rem;
    margin: 1.2rem 0;
    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      font-size: 1.8rem;
    }
  }

  h5 {
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: black;
  }

  p,
  i,
  a,
  b,
  li,
  button {
    color: black;
    font-size: 1.8rem;
    line-height: 1.8;

    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      line-height: 1.8;
      font-size: 1.6rem;
    }
  }

  i {
    font-style: italic;
  }

  b {
    font-family: 'Radio Grotesk';
  }

  span {
    font-size: inherit;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  strong {
    font-weight: 700;
  }

  small {
    color: black;
    opacity: 0.6;
    line-height: 0.6;
    font-size: 1.2rem;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  main {
    background: #f0f0f0;
  }

  .canvas {
    order: 2;
    flex: 1;
    height: 100vh !important;

    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      height: 85vh !important;
    }
  }

  .overlay {
    position: relative;
    order: 1;
    flex: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  tspan {
    font-size: 4rem;
  }

  hr {
    display: block;
    width: 100%;
    height: 0;
    border: 1px #eeeeee solid;
  }

  article,
  aside,
  dialog,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html,
  body {
    text-rendering: optimizeLegibility;
  }

  body {
    line-height: 1;
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
    content: none;
  }

  :focus {
    outline: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .clear {
    clear: both;
  }

  img {
    border: 0;
  }

  img a {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .landscape-carousel-next,
  .landscape-carousel-prev {
    position: absolute;
    background: white;
    border-radius: 50%;
    border: 1px solid black;
    min-width: 6rem;
    max-width: 6rem;
    min-height: 6rem;
    max-height: 6rem;
    padding: 1rem;
    top: 50%;
    z-index: 1;
    opacity: 0.4;
    transition: opacity 0.4s ease-in;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
    @media (max-width: ${(props) =>
        props.theme.breakpoints.laptop}) and (hover: none) {
      &:hover {
        opacity: 0.4;
      }
    }
  }

  .landscape-carousel-next {
    right: 3rem;
  }

  .landscape-carousel-prev {
    left: 3rem;
  }

  #cookie-notification {
    border-radius: 14px;
    background: white;
    border: 2px solid black;
    padding: 0 2rem;
    a,
    #cookie-notification #notificationManagerLink,
    button,
    p {
      font-size: 1.6rem !important;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
      padding: 2rem;
    }
  }
  .enzuzo-notification-buttons {
    button {
      color: white !important;
    }
  }

  #cookie-notification #notificationManagerLink {
    color: #fa78bb !important;
  }

  .enzuzo-notification-desc {
    font-size: 1.6rem;
  }

  .ticker {
    vertical-align: middle;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  .hide {
    top: -7rem !important;
  }
`;

GlobalStyles.defaultProps = {
  theme: typedTheme,
};

export default GlobalStyles;
