import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
 		box-sizing: border-box;
	}

	* {
  	margin: 0;
  	padding: 0;
	}
  
  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    color: #adbac7;
    line-height: 1.5;
    background: #1f2227;
    font-family: sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
