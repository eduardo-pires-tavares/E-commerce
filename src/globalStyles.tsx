import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`* {
	box-sizing: border;
}
body {
	font-family: "Open Sans Condensed", sans-serif;
	padding: 40px 60px;

    @media screen and (max-width:800px) {
        padding:10px;
    }
}

a {
	text-decoration: none;
}
`;
