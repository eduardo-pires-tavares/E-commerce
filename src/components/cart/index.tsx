import React, { Dispatch, FC, useRef, useEffect } from "react";
import "./index.styles.scss";
import { connect, ConnectedProps } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import { ApplicationState } from "../../store";
import { toggleCart } from "../../store/cart/actions";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import { createStructuredSelector } from "reselect";
import {
	selectCartItemsCount,
	selectCartItems,
	selectCartVisibility,
	ICartSelector,
	selectCartTotalPrice,
} from "../../store/cart/selectors";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CustomButton from "../custom-button";
import CartItemComponent from "../cart-item";

const Cart: FC<CartIconProps> = ({
	toggleCart,
	open,
	cartItems,
	cartItemsCount,
	cartItemsTotalPrice,
	match,
	history,
}) => {
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
				<span className='item-count'>{cartItemsCount}</span>
			</div>

			{open && (
				<div ref={dropdown} className='cart-dropdown'>
					<div className='cart-items'>
						{cartItems?.length ? (
							cartItems?.map(({ id, ...otherProps }: CartItem) => {
								return <CartItemComponent key={id} {...otherProps} />;
							})
						) : (
							<span className='empty-message'>Your cart is empty</span>
						)}
					</div>
					<div className='cart-footer'>
						<span>
							<strong>Quantity: </strong>
							{cartItemsCount} Items
						</span>
						<span>
							<strong>Total: </strong>
							{cartItemsTotalPrice} $
						</span>
					</div>
					<CustomButton
						onClick={() => {
							history.push(`${match.url}checkout`);
							toggleCart();
						}}
					>
						Go TO CHECKOUT
					</CustomButton>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ICartSelector>({
	cartItems: selectCartItems,
	open: selectCartVisibility,
	cartItemsCount: selectCartItemsCount,
	cartItemsTotalPrice: selectCartTotalPrice,
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	toggleCart: () => dispatch(toggleCart()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default withRouter(connector(Cart));
