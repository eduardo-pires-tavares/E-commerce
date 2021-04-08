import styled, { css } from "styled-components";

const buttonStyles = css`
	button {
		margin-top: auto;
	}
`;

export const CartIconContainer = styled.div`
	height: 45px;
	width: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	@media screen and (max-width: 800px) {
		right: 10px;
		top: 80px;
		position: absolute;
		top: 5%;
		right: 1rem;
		z-index: 10;
	}
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 11px;
	font-weight: bold;
	bottom: 12px;
	user-select: none;
`;

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	right: 20px;
	top: 100px;
	z-index: 5;
	transition: all 2s ease;
	${buttonStyles}

	@media screen and (max-width:800px) {
		right: 10px;
		top: 80px;
	}
`;

export const CartItemContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar {
		width: 3px;
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		background-color: black;
		outline: 1px solid black;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 100px auto;
`;

export const CartFooterContainer = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;

	@media screen and (max-device-width: 800px) {
		flex-direction: column;

		span {
			padding-bottom: 5px;
		}
	}
`;
