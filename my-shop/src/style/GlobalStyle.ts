import { createGlobalStyle } from "styled-components";

// CSS in TS
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #f5f5f5;
}

body, button, input{
    font-family: "Poppins", sans-serif;
}
`