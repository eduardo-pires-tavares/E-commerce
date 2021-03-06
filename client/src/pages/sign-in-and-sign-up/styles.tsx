import styled from "styled-components";

export const Wrapper = styled.div`
	width: 850px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 100px;
	margin: 30px auto;

	@media screen and (max-width: 800px) {
		width: 100%;
		grid-template-columns: 1fr;
	}
`;
