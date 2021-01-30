import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ApplicationState } from "../../store";
import { IShopSelector, selectCollections } from "../../store/shop/selectors";
import CollectionPreview from "../preview-collection";
import "./index.styles.scss";

const CollectionOverview: FC<CollectionOverviewProps> = ({ collections }) => {
	return (
		<div className='collection-overview'>
			{Object.values(collections!).map(({ id, ...otherProps }) => {
				return <CollectionPreview key={id} {...otherProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, IShopSelector>({
	collections: selectCollections,
});

const connector = connect(mapStateToProps);

type CollectionOverviewProps = ConnectedProps<typeof connector>;

export default connector(CollectionOverview);
