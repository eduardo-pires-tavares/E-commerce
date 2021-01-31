import styled, { css } from "styled-components";

interface ImageContainerProps {
	backgroundImage: string;
}

const buttonStyles = css`
	button {
		width: 80px;
		opacity: 0.7;
		position: absolute;
		top: 200px;
	}
`;

export const CollectionItemContainer = styled.div`
	width: 22%;
	height: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 10px;
	position: relative;

	${buttonStyles}
`;

export const ImageContainer = styled.div<ImageContainerProps>`
	height: 95%;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	transition: opacity 500ms ease-in-out;
	border: 2px solid black;
	background-image: url(${props => props.backgroundImage});

	&:hover {
		opacity: 0.8;

		button {
			display: flex;
			opacity: 0.85;
		}
	}
`;

export const CollectionItemFooter = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	font-size: 18px;
	justify-content: space-between;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const Price = styled.span`
	text-align: end;
	width: 10%;
`;
