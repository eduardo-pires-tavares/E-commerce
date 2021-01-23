import React, { Dispatch, FC, useRef, useEffect } from "react";
import "./index.styles.scss";
import { connect, ConnectedProps } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import { ApplicationState } from "../../store";
import { toggleCart } from "../../store/cart/actions";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import CustomButton from "../custom-button";
import CartItemComponent from "../cart-item";

import "./index.styles.scss";

const Cart: FC<CartIconProps> = ({ toggleCart, open, items }) => {
	const wrapper = useRef<HTMLDivElement>(null);
	const dropdown = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: Event) => {
		if (
			wrapper.current &&
			!wrapper.current.contains(event.target as Node) &&
			dropdown.current
		) {
			toggleCart();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	});

	return (
		<div ref={wrapper} className='cart-wrapper'>
			<div className='cart-icon' onClick={() => toggleCart()}>
				<ShoppingIcon className='shoping-icon' />
				<span className='item-count'>999</span>
			</div>

			{open && (
				<div ref={dropdown} className='cart-dropdown'>
					<div className='cart-items'>
						{items?.map(({ id, ...otherProps }: CartItem) => {
							return <CartItemComponent key={id} {...otherProps} />;
						})}
					</div>
					<CustomButton>Go TO CHECKOUT</CustomButton>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = ({ cart: { items, open } }: ApplicationState) => ({
	items,
	open,
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	toggleCart: () => dispatch(toggleCart()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>;

export default connector(Cart);
