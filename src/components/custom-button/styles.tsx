import styled, { css } from "styled-components";

interface Props {
	inverted?: boolean;
	isGoogleSignIn?: boolean;
}

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;
	border: none;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }: Props) => {
	if (isGoogleSignIn) {
		return googleSignInStyles;
	}

	return inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button<Props>`
	min-width: 140px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	outline: none;
	line-height: 50px;
	padding: 0px 30px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: "Open Sans Condensed", sans-serif;
	font-weight: bolder;
	cursor: pointer;
	transition: 150ms ease all;
	display: flex;
	justify-content: center;

	${props => getButtonStyles(props)}
`;
