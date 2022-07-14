import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    // text-decoration: none;
    // color: inherit;
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  input,
  textarea,
  form,
  nav,
  div,
  p,
  span {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: inherit;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(207, 207, 207, 0.5); // TODO: Standardize color
  }
  input,
  textarea {
    font-family: "Open Sans", sans-serif;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(189, 189, 189);
  }
`;

/* */
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
export default GlobalStyle;
