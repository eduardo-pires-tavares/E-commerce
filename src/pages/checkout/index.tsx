import { Dispatch, FC, useEffect } from "react";
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
	RedirectToSignInPayNowButton,
} from "./styles";
import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe";
import { ISelectUser, isLoginFromCheckout, selectCurrentUser } from "../../store/users/selectors";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { toggleLoginFromCartAction } from "../../store/users/actions";
import { UserActionTypes } from "../../store/users/types";

const CheckoutPage: FC<CheckoutPageProps> = ({
	cartItems,
	cartItemsTotalPrice,
	currentUser,
	history,
	toggleLoginFromCart,
	loginFromCheckout,
}) => {
	useEffect(() => {
		if (loginFromCheckout) {
			toggleLoginFromCart();
		}
	}, [loginFromCheckout, toggleLoginFromCart]);

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
				{currentUser ? (
					<StripeCheckoutButton total={cartItemsTotalPrice!} />
				) : (
					<RedirectToSignInPayNowButton
						onClick={() => {
							history.push("/signin");
							toggleLoginFromCart();
						}}
					>
						<span>Pay Now</span>
					</RedirectToSignInPayNowButton>
				)}
			</StripeContainer>
			<WarningContainer>
				*Please use the following test VISA credit card for mock payments*
				<br />
				4242 4242 4242 4242 - Exp: 12/21 - CVV:123
			</WarningContainer>
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ICartSelector & ISelectUser>({
	cartItems: selectCartItems,
	cartItemsTotalPrice: selectCartTotalPrice,
	currentUser: selectCurrentUser,
	loginFromCheckout: isLoginFromCheckout,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	toggleLoginFromCart: () => dispatch(toggleLoginFromCartAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CheckoutPageProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default withRouter(connector(CheckoutPage));
