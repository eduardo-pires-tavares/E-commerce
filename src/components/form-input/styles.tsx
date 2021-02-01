import styled, { css } from "styled-components";

interface LabelProps {
	value: any;
}

const mainColor = "black";
const subColor = "grey";

const shrinkLabelStyles = css`
	top: -18px;
	font-size: 14px;
	color: ${mainColor};
`;

const passwordInputStyles = css`
	input[type="password"] {
		letter-spacing: 0.3em;
	}
`;

export const FormContainer = styled.div`
	position: relative;
	margin: 45px 0px;

	${passwordInputStyles}
`;

export const FormGroupInput = styled.input`
	background: none;
	background-color: white;
	color: ${subColor};
	font-size: 16px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0px;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0px;

	&:focus {
		outline: none;
	}

	&:focus ~ label {
		${shrinkLabelStyles}
	}
`;

export const FormLabel = styled.label<LabelProps>`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 2px;
	top: -10px;
	transition: 300ms ease all;

	${props => (props.value ? shrinkLabelStyles : "")}
`;
