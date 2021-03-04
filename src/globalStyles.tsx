import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`* {
	box-sizing: border-box;
	margin:0;
	outline: 0 !important;
}

*:focus {
    outline:0;
}



body {
	font-family: "Open Sans Condensed", sans-serif;

}

a {
	text-decoration: none;
}

.content{
	padding: 25px 20px;

	@media screen and (max-width:800px) {
		padding:10px;
	}
}


`;
