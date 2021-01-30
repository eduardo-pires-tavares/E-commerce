import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe";
import { ApplicationState } from "../../store";
import { selectCartItems, selectCartTotalPrice, ICartSelector } from "../../store/cart/selectors";
import "./index.styles.scss";

const CheckoutPage: FC<CheckoutPageProps> = ({ cartItems, cartItemsTotalPrice }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-page-items'>
				{cartItems?.map(item => {
					return <CheckoutItem key={item.id} cartItem={item} />;
				})}
			</div>
			<div className='checkout-page-price'>
				<span>
					<strong>Total:</strong> {cartItemsTotalPrice} $
				</span>
			</div>
			<div className='checkout-page-stripe'>
				<StripeCheckoutButton total={cartItemsTotalPrice!} />
			</div>
			<div className='test-warning'>
				*Please use the following test VISA credit card for mock payments*
				<br />
				4242 4242 4242 4242 - Exp: 12/21 - CVV:123
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
