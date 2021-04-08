import styled from "styled-components";

export const SignUpContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	button {
		@media screen and (max-width: 800px) {
			display: grid;
			grid-template-columns: 1fr;
			grid-row-gap: 10px;
			width: 55%;
		}
	}
`;

export const Title = styled.h2`
	margin: 10px 0px;
`;
