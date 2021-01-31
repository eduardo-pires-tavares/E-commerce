import styled, { css } from "styled-components";

const imageStyles = css`
	img {
		height: 100%;
		width: 100%;
		border-radius: 5px;
	}
`;

const buttonStyles = css`
	button {
		width: 40px;
		opacity: 0.7;
		position: absolute;
		top: 180px;
	}
`;

export const CheckoutItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 210px;
	min-width: 210px;
	max-height: 350px;
	margin: 30px 30px;
	font-size: 20px;
	align-items: flex-start;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 250px;
	display: flex;
	justify-content: center;
	${imageStyles}
	${buttonStyles}
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const NameContainer = styled.div`
	font-weight: 700;
	margin: 10px 0;
`;

export const PriceQuantityContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 5px;
`;

export const Increase = styled.span`
	margin-right: 5px;
	cursor: pointer;
	user-select: none;
`;

export const Decrease = styled.span`
	margin-left: 5px;
	cursor: pointer;
	user-select: none;
`;
