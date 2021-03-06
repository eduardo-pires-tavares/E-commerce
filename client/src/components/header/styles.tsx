import styled from "styled-components";
import { Link } from "react-router-dom";

type OptionsContainerProps = {
	justifyContent?:
		| "center"
		| "flex-end"
		| "flex-start"
		| "space-around"
		| "space-between"
		| "space-evenly";
	width?: string;
};

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
	position: sticky;
	top: 0;
	background: white;
	z-index: 1000;
	padding: 25px 60px;
	background: linear-gradient(to right, rgb(253, 251, 251), rgb(235, 237, 238));

	@media screen and (max-width: 800px) {
		height: 60px;
		margin-bottom: 20px;
	}

	@media screen and (max-width: 1000px) {
		padding: 25px 10px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	@media screen and (max-with: 800px) {
		width: 50px;
		padding: 0;
	}
`;

export const OptionsContainer = styled.div<OptionsContainerProps>`
	width: ${props => (props.width ? props.width : "50%")};
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: ${props => (props.justifyContent ? props.justifyContent : "")};

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const LogoWrapper = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	width: 10%;
`;

export const OptionLink = styled(Link)`
	padding: 7px 7px;
	color: black;
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	border-radius: 5px;
	@media screen and (max-width: 800px) {
		padding: 10px 10px;
	}

	transition: all 500ms ease;

	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`;

export const MainCategoriesNav = styled.nav`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;
