import { Component, Dispatch } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { ShopActionTypes } from "../../store/shop/types";
import { loadShopStart } from "../../store/shop/actions";
import { connect, ConnectedProps } from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends Component<ShopPageProps, {}> {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match } = this.props;

		return (
			<div>
				<Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
				<Route path={`${match.path}/:collection`} component={CollectionPageContainer} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<ShopActionTypes>) => ({
	fetchCollectionsAsync: () => dispatch(loadShopStart()),
});

const connector = connect(null, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default connector(ShopPage);
