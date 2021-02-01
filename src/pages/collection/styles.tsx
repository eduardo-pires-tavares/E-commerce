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

	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	.collection-item {
		min-width: 415px;
		min-height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px 15px;
		position: relative;
	}
`;
