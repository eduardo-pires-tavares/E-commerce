import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import collectionOverview from ".";
import { ApplicationState } from "../../store";
import { isCollecionsFetching, IShopSelector } from "../../store/shop/selectors";
import Loading from "../loader";

const mapStateToProps = createStructuredSelector<ApplicationState, IShopSelector>({
	loading: isCollecionsFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(Loading(collectionOverview));

export default CollectionsOverviewContainer;
