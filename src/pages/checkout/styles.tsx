import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
	width: 70%;
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 50px auto;
`;

export const ItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid black;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	font-size: 22px;
`;

export const StripeContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 5px;
`;

export const WarningContainer = styled.div`
	color: red;
	text-align: center;
	font-size: 36px;
`;
