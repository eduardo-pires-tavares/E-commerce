import { FC, Dispatch } from "react";
import { ShopActionTypes } from "../../store/shop/types";
import { loadShopStart } from "../../store/shop/actions";
import { connect, ConnectedProps } from "react-redux";
import DetailsPageContainer from "../../components/collection-item-details/details.container";

const DetailsPage: FC<DetailsPageProps> = ({ fetchCollectionsAsync }) => {
	fetchCollectionsAsync();

	return <DetailsPageContainer />;
};

const mapDispatchToProps = (dispatch: Dispatch<ShopActionTypes>) => ({
	fetchCollectionsAsync: () => dispatch(loadShopStart()),
});

const connector = connect(null, mapDispatchToProps);

type DetailsPageProps = ConnectedProps<typeof connector>;

export default connector(DetailsPage);
