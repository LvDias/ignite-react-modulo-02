import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background}
  }

  h1, h2 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
  }

  h3, p, span {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }

  button { 
    cursor: pointer;
    text-transform: uppercase;
  }

  button, input {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    outline: none;
    border: none;
    background: none;
  }
`
