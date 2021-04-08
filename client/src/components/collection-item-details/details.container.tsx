import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import details from ".";
import Loading from "../loader";
import { ApplicationState } from "../../store";
import { isCollecionsFetching, IShopSelector } from "../../store/shop/selectors";

const mapStateToProps = createStructuredSelector<ApplicationState, IShopSelector>({
	loading: isCollecionsFetching,
});

export default connect(mapStateToProps)(Loading(details));
