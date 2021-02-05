import { Component } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { ShopActionTypes } from "../../store/shop/types";
import { createStructuredSelector } from "reselect";
import { fetchShopCollections } from "../../store/shop/actions";
import { connect, ConnectedProps } from "react-redux";
import CollectionOverview from "../../components/collection-overview";
import Collection from "../collection";
import Loader from "../../components/loader";
import { ApplicationState } from "../../store";
import { IShopSelector, isCollecionsFetching } from "../../store/shop/selectors";
import { ThunkDispatch } from "redux-thunk";

const CollectionOverviewWithLoader = Loader(CollectionOverview);
const CollectionLoader = Loader(Collection);
class ShopPage extends Component<ShopPageProps, {}> {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match, loading } = this.props;

		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					render={(props: any) => (
						<CollectionOverviewWithLoader loading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collection`}
					render={(props: any) => <CollectionLoader loading={loading} {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector<ApplicationState, IShopSelector>({
	loading: isCollecionsFetching,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ShopActionTypes>) => ({
	fetchCollectionsAsync: () => dispatch(fetchShopCollections()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default connector(ShopPage);
