import styled from "styled-components";

export const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
`;

export const Title = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
`;

export const FullCollectionContainer = styled.div`
	max-width: 1350px;
	flex-wrap: wrap;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 100px;

	.collection-item {
		min-width: 335px;
		min-height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px 15px;
		position: relative;
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: row;
	}
`;
