import "./index.styles.scss";
import CustomButton from "../custom-button";

const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton>Go TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
