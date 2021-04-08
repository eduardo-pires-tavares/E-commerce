import { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../store/cart/actions";
import { CartActionTypes } from "../../store/cart/types";

type Props = {
	total: number;
};

const handleToken = (token: any, clearCart: () => void) => {
	console.log(token);
	clearCart();
	window.location.href = "/orders";
};

const StripeCheckoutButton = ({ total, clearCart }: StripeCheckoutProps) => {
	const logoUrl = "https://i.ibb.co/80K7n9Y/logo.png";

	if (!total) {
		return null;
	}

	const stripePrice = total * 100;
	const stripePublishableKey =
		"pk_test_51IF7MQImq6j7nKVV0E5ZnUFkpU90xHDiOdP3K1hYLGvNyJ2LvA87fmmmLyhM76ZnIM6XFRcrrd9yZtzgdh0k5yK200Y1PnM0uX";
	return (
		<StripeCheckout
			label='Pay Now '
			shippingAddress
			billingAddress
			ComponentClass='div'
			description={`Your total is $${total}`}
			amount={stripePrice}
			image={logoUrl}
			panelLabel='Pay Now '
			token={token => handleToken(token, clearCart)}
			stripeKey={stripePublishableKey}
		/>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	clearCart: () => dispatch(clearCart()),
});

const connector = connect(null, mapDispatchToProps);

type StripeCheckoutProps = ConnectedProps<typeof connector> & Props;

export default connector(StripeCheckoutButton);
