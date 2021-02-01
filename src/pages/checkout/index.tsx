import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ApplicationState } from "../../store";
import { selectCartItems, selectCartTotalPrice, ICartSelector } from "../../store/cart/selectors";
import {
	CheckoutPageContainer,
	PriceContainer,
	ItemsContainer,
	StripeContainer,
	WarningContainer,
} from "./styles";
import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe";

const CheckoutPage: FC<CheckoutPageProps> = ({ cartItems, cartItemsTotalPrice }) => {
	return (
		<CheckoutPageContainer>
			<ItemsContainer>
				{cartItems?.map(item => {
					return <CheckoutItem key={item.id} cartItem={item} />;
				})}
			</ItemsContainer>
			<PriceContainer>
				<span>
					<strong>Total:</strong> {cartItemsTotalPrice} $
				</span>
			</PriceContainer>
			<StripeContainer>
				<StripeCheckoutButton total={cartItemsTotalPrice!} />
			</StripeContainer>
			<WarningContainer>
				*Please use the following test VISA credit card for mock payments*
				<br />
				4242 4242 4242 4242 - Exp: 12/21 - CVV:123
			</WarningContainer>
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ICartSelector>({
	cartItems: selectCartItems,
	cartItemsTotalPrice: selectCartTotalPrice,
});

const connector = connect(mapStateToProps);

type CheckoutPageProps = ConnectedProps<typeof connector>;

export default connector(CheckoutPage);
