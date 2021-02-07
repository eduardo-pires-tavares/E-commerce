import { Component } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { ShopActionTypes } from "../../store/shop/types";
import { fetchShopCollections } from "../../store/shop/actions";
import { connect, ConnectedProps } from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { ApplicationState } from "../../store";
import { ThunkDispatch } from "redux-thunk";

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

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ShopActionTypes>) => ({
	fetchCollectionsAsync: () => dispatch(fetchShopCollections()),
});

const connector = connect(null, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default connector(ShopPage);
