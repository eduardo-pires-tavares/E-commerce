import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item";
import { ApplicationState } from "../../store";
import { selectCartItems, selectCartTotalPrice, ICartSelector } from "../../store/cart/selectors";
import "./index.styles.scss";

const CheckoutPage: FC<CheckoutPageProps> = ({ cartItems, cartItemsTotalPrice }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems?.map(({ id, ...otherProps }) => {
				return <CheckoutItem key={id} {...otherProps} />;
			})}
			<div className='total'>
				<span>
					<strong>TOTAL: </strong>
					{cartItemsTotalPrice}
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ICartSelector>({
	cartItems: selectCartItems,
	cartItemsTotalPrice: selectCartTotalPrice,
});

const connector = connect(mapStateToProps);

type CheckoutPageProps = ConnectedProps<typeof connector>;

export default connector(CheckoutPage);
