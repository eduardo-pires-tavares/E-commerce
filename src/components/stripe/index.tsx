import StripeCheckout from "react-stripe-checkout";

type Props = {
	total: number;
};

const handleToken = (token: any) => {
	console.log(token);
	alert("Payment Successfull");
};

const StripeCheckoutButton = ({ total }: Props) => {
	const stripePrice = total * 100;
	const stripePublishableKey =
		"pk_test_51IF7MQImq6j7nKVV0E5ZnUFkpU90xHDiOdP3K1hYLGvNyJ2LvA87fmmmLyhM76ZnIM6XFRcrrd9yZtzgdh0k5yK200Y1PnM0uX";
	return (
		<StripeCheckout
			label='Pay Now '
			shippingAddress
			billingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${total}`}
			amount={stripePrice}
			panelLabel='Pay Now '
			token={handleToken}
			stripeKey={stripePublishableKey}
		/>
	);
};

export default StripeCheckoutButton;
