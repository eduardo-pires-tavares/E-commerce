import styled from "styled-components";

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h2`
	margin: 10px 0px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 10px;
		width: 55%;
	}
`;
