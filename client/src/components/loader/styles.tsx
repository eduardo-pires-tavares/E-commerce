import styled from "styled-components";

export const WrapperContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
	width: 100%;
	position: relative;
`;

export const Spinner = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 5px solid #f3f3f3;
	border-top: 5px solid black;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
