import { Dispatch, FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { ApplicationState } from "../../store";
import { toggleCart } from "../../store/cart/actions";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import CustomButton from "../custom-button";
import "./index.styles.scss";

const CartDropdown: FC<CartDropdownProps> = ({ items }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{items?.map(({ name, id, price, imageUrl, quantity }: CartItem, i) => {
					return (
						<div key={id}>
							<span>{name}</span>
							<span>{price}</span>
							<span>{quantity}</span>
							<img src={imageUrl}></img>
						</div>
					);
				})}
			</div>
			<CustomButton>Go TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { items } }: ApplicationState) => ({
	items,
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	toggleCart: () => dispatch(toggleCart()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CartDropdownProps = ConnectedProps<typeof connector>;

export default connector(CartDropdown);
