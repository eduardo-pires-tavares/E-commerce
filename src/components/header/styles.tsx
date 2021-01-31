import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	color: black;
	cursor: pointer;
	font-size: 16px;
`;
