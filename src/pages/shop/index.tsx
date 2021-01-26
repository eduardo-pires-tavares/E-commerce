import { Route, RouteComponentProps } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview";
import Collection from "../collection";

const ShopPage = ({ match }: RouteComponentProps) => {
	return (
		<div>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collection`} component={Collection} />
		</div>
	);
};

export default ShopPage;
