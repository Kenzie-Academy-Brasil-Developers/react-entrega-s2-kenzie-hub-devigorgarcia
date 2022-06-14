import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #C9C3CF;
    --black: #0D0D0D;
    --color-link: #57A7FF;
    --bg-form: #262626;
    --orange: #6C63FF;
    --bg-button: #575A89;
    --grey: #868E96;
    --gray2: #343B41;
    --color-error: #c53030;
    --inter: 'Inter', sans-serif;

  }

  body {
    font-family: var(--inter);
  }


  ul, ol, li {
    list-style: none;
  }
  
  button {
    cursor: pointer;
    font-family: var(--inter);
  }

  a {
    font-style: none;
    font-weight: bold;
    text-decoration: none;
    color: var(--color-link);
  }
`;


