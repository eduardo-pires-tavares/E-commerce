import "./index.styles.scss";
import { Dispatch, FC } from "react";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import { connect, ConnectedProps } from "react-redux";
import { clearItemFromCart } from "../../store/cart/actions";

const CartItemComponent: FC<CartItemProps> = ({ cartItem, clearItemFromCart }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='item'></img>
			<div className='item-details'>
				<div className='name-remove-button'>
					<span className='name'>{name}</span>
					<span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
						&#10006;
					</span>
				</div>
				<span className='price'>
					{quantity} x {price}$
				</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	clearItemFromCart: (data: CartItem) => dispatch(clearItemFromCart(data)),
});

const connector = connect(null, mapDispatchToProps);

type Props = {
	cartItem: CartItem;
};

type CartItemProps = ConnectedProps<typeof connector> & Props;

export default connector(CartItemComponent);
