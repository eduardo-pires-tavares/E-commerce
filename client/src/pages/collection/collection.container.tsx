import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import collection from ".";
import Loading from "../../components/loader";
import { ApplicationState } from "../../store";
import { isCollecionsFetching, IShopSelector } from "../../store/shop/selectors";

const mapStateToProps = createStructuredSelector<ApplicationState, IShopSelector>({
	loading: isCollecionsFetching,
});

export default connect(mapStateToProps)(Loading(collection));
