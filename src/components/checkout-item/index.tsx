import { FC, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { clearItemFromCart, removeFromCart, addToCart } from "../../store/cart/actions";
import { CartItem, CartActionTypes } from "../../store/cart/types";
import CustomButton from "../custom-button";
import "./index.styles.scss";

const CheckoutItem: FC<CheckoutItemProps> = ({
	cartItem,
	clearItemFromCart,
	removeItemFromCart,
	addItemToCart,
}) => {
	const { imageUrl, name, price, quantity } = cartItem;

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
				<CustomButton onClick={() => clearItemFromCart(cartItem)} inverted>
					Remove
				</CustomButton>
			</div>
			<div className='item-wrapper'>
				<div className='name'>
					<span>{name}</span>
				</div>

				<div className='price-quantity'>
					<div className='price'>
						<span>
							<strong>Price: </strong>
							{price} $
						</span>
					</div>
					<div className='quantity'>
						<span>
							<strong>Quantity: </strong>
							<span
								className='decrease'
								onClick={() =>
									quantity !== 1
										? removeItemFromCart(cartItem)
										: clearItemFromCart(cartItem)
								}
							>
								&#10094;
							</span>
							{quantity}
							<span className='increase' onClick={() => addItemToCart(cartItem)}>
								&#10095;
							</span>
						</span>
					</div>
				</div>
				<div className='sub-total'>
					<span>
						<strong>Sub-Total: </strong>
						{price! * quantity!} $
					</span>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => {
	return {
		clearItemFromCart: (data: CartItem) => dispatch(clearItemFromCart(data)),
		addItemToCart: (data: CartItem) => dispatch(addToCart(data)),
		removeItemFromCart: (data: CartItem) => dispatch(removeFromCart(data)),
	};
};

const connector = connect(null, mapDispatchToProps);

type Props = {
	cartItem: CartItem;
};

type CheckoutItemProps = ConnectedProps<typeof connector> & Props;

export default connector(CheckoutItem);
