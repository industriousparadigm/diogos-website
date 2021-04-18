import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* start Meyer's reset (with tweaks) */
  html, body, div, span, applet, object, iframe,
  h4, h5, h6, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ul, ol, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* end Meyer's reset */

  /* global CSS variables */
  html {
    --color-primary: rgb(205, 200, 198);
    --color-bold: rgb(225, 220, 215);
    --color-secondary: rgb(255, 100, 100);
    --color-tertiary: rgb(201, 224, 109);
    --color-background: rgb(70, 70, 70);
  }

  /* misc site rules */
  html,
  body {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--color-background);
    color: var(--color-primary);
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: var(--color-tertiary);
    text-decoration: none;
    cursor: pointer;

    /* hack to avoid underline remaining in mobile 🤦‍♀️ */
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  h2, h3, h4 {
    color: var(--color-bold);
    font-weight: 700;
  }

  h1 {
    font-weight: 800;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p, ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.5rem;
  }

  strong {
    color: var(--color-bold);
  }

  /* hack to re-style Lists inside articles */
  p + ul {
    list-style: square;
    margin-left: 20px;
  }
`;
