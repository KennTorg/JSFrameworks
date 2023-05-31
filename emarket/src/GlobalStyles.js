import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
}

h1 {
    font-family: Montserrat;
}

body {
    font-family: Roboto, Montserrat;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #fff;

}`;
