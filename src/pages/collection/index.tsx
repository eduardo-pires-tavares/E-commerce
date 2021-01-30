import "./index.styles.scss";
import { RouteComponentProps } from "react-router-dom";
import { ITEMS } from "../../store/shop/types";
import { ApplicationState } from "../../store";
import { selectCollection } from "../../store/shop/selectors";
import { connect, ConnectedProps } from "react-redux";
import CollectionItem from "../../components/collection-item";

interface RouteInfo {
	collection: string;
}

const Collection = ({ collection }: CollectionProps) => {
	return (
		<div>
			<div className='collection'>
				<h1 className='title'>{collection?.title.toUpperCase()}</h1>
				<div className='collection-full'>
					{collection?.items?.map(({ id, ...otherComponentProps }: ITEMS) => {
						return <CollectionItem key={id} id={id} {...otherComponentProps} />;
					})}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps<RouteInfo>) => ({
	collection: selectCollection(ownProps.match.params.collection)(state),
});

const connector = connect(mapStateToProps);

type CollectionProps = ConnectedProps<typeof connector> & RouteComponentProps<RouteInfo>;

export default connector(Collection);
