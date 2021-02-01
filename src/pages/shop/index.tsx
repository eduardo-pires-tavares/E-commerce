import { Component, Dispatch } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase";
import { DATA, ShopActionTypes, HashTable } from "../../store/shop/types";
import { updateCollection } from "../../store/shop/actions";
import { connect, ConnectedProps } from "react-redux";
import CollectionOverview from "../../components/collection-overview";
import Collection from "../collection";
import firebase from "firebase";

class ShopPage extends Component<ShopPageProps, {}> {
	unsubscribeFromAuth: any = null;

	componentDidMount() {
		const { updateCollections } = this.props;

		const collectionRef = firestore.collection(
			"collections",
		) as firebase.firestore.CollectionReference<DATA>;

		collectionRef.onSnapshot(async snapshot => {
			const collections = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collections);
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div>
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route path={`${match.path}/:collection`} component={Collection} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<ShopActionTypes>) => ({
	updateCollections: (data: HashTable<DATA>) => dispatch(updateCollection(data)),
});

const connector = connect(null, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default connector(ShopPage);
