import styled, { css } from "styled-components";

const spanRedirectToSignInStyles = css`
	span {
		background-image: linear-gradient(
			rgb(125, 197, 238),
			rgb(0, 140, 221) 85%,
			rgb(48, 162, 228)
		);
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 14px;
		position: relative;
		padding: 0px 12px;
		display: block;
		height: 30px;
		line-height: 30px;
		color: rgb(255, 255, 255);
		font-weight: bold;
		box-shadow: rgb(255 255 255 / 25%) 0px 1px 0px inset;
		text-shadow: rgb(0 0 0 / 25%) 0px -1px 0px;
		border-radius: 4px;
	}
`;

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
	padding-bottom: 10px;
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

export const RedirectToSignInPayNowButton = styled.button`
	overflow: hidden;
	display: inline-block;
	background: linear-gradient(rgb(40, 160, 229), rgb(1, 94, 148));
	border: 0px;
	padding: 1px;
	text-decoration: none;
	border-radius: 5px;
	box-shadow: rgb(0 0 0 / 20%) 0px 1px 0px;
	cursor: pointer;
	visibility: visible;
	user-select: none;
	${spanRedirectToSignInStyles}
`;
