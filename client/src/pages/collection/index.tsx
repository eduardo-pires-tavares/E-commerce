import { RouteComponentProps } from "react-router-dom";
import { ITEMS } from "../../store/shop/types";
import { ApplicationState } from "../../store";
import { selectCollection } from "../../store/shop/selectors";
import { connect, ConnectedProps } from "react-redux";
import { CollectionContainer, FullCollectionContainer, Title } from "./styles";
import CollectionItem from "../../components/collection-item";

interface RouteInfo {
	collection: string;
}

const Collection = ({ collection }: CollectionProps) => {
	return (
		<div>
			<CollectionContainer>
				<Title>{collection?.title.toUpperCase()}</Title>
				<FullCollectionContainer>
					{collection?.items?.map(({ id, ...otherComponentProps }: ITEMS) => {
						return (
							<CollectionItem
								collection={collection?.routeName}
								key={id}
								id={id}
								{...otherComponentProps}
							/>
						);
					})}
				</FullCollectionContainer>
			</CollectionContainer>
		</div>
	);
};

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps<RouteInfo>) => ({
	collection: selectCollection(ownProps.match.params.collection)(state),
});

const connector = connect(mapStateToProps);

type CollectionProps = ConnectedProps<typeof connector> & RouteComponentProps<RouteInfo>;

export default connector(Collection);
