import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;

	@media screen and (max-with: 800px) {
		width: 50px;
		padding: 0;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
		justify-content: space-between;
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	color: black;
	cursor: pointer;
	font-size: 16px;

	@media screen and (max-width: 800px) {
		padding: 10px 10px;
	}
`;
