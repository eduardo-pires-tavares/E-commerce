import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.querySelector("#root");

ReactDom.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	root,
);
