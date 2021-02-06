import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const Title = styled.h1`
	cursor: pointer;
	padding-left: 10px;
	font-size: 28px;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;

export const Preview = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
