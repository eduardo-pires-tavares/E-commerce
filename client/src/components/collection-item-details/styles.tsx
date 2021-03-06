import { Link } from "react-router-dom";
import styled from "styled-components";

type SizeProps = {
	active?: boolean;
};

export const DetailCard = styled.div`
	width: 1000px;
	height: 450px;
	display: grid;
	grid-template-columns: 400px 600px;
	grid-gap: 20px;
	margin: 30px auto;
	background-color: white;
	padding: 10px;
	border: 1px solid black;
	position: relative;

	@media screen and (max-width: 1100px) {
		width: 800px;
	}

	@media screen and (max-width: 800px) {
		display: flex;
		margin: unset;
		height: 900px;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 5px;
	}
`;

export const GoBackContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	z-index: 100;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const GoBack = styled(Link)`
	display: flex;
	color: black;
	padding: 5px;
	border: 1px solid black;
	border-radius: 50%;
	transition: all 100ms ease;

	&:hover {
		background: black;
		color: white;
	}
`;

export const DetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 100%;
	position: relative;
	justify-content: center;

	@media screen and (max-width: 1100px) {
		width: 60%;
	}

	@media screen and (max-width: 800px) {
		width: 100%;
		justify-content: flex-start;
	}
`;

export const TopInfo = styled.div`
	display: flex;
	flex-direction: column;
	height: 30%;
	justify-content: center;
	width: 100%;
	align-items: center;
	word-spacing: 5px;
	letter-spacing: 5px;
	border-bottom: 1px solid lightgray;

	@media screen and (max-width: 800px) {
		height: 25%;
		line-height: 60px;
		padding-bottom: 10px;
	}
`;

export const SizeInfo = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	height: 20%;
	align-items: center;
	align-self: center;
	@media screen and (max-width: 800px) {
		width: 95%;
		height: 25%;
	}
`;

export const Size = styled.button<SizeProps>`
	cursor: pointer;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 1px;
	font-size: 14px;
	background: ${({ active }) => (active ? "black" : "white")};
	color: ${({ active }) => (active ? "white" : "black")};
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	height: 30%;
	align-items: center;
	align-self: center;
	border-top: 1px solid lightgray;

	@media screen and (max-width: 800px) {
		height: 40%;
	}
`;
