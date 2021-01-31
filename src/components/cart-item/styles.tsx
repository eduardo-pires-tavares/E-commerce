import styled, { css } from "styled-components";

const imageStyles = css`
	img {
		width: 30%;
	}
`;

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
	${imageStyles}
`;

export const ItemDetailsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
`;

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Remove = styled.span`
	padding-left: 5px;
	cursor: pointer;
`;

export const Name = styled.span`
	font-size: 16px;
`;
