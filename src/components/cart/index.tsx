import { Dispatch, FC, useRef, useEffect } from "react";
import {
	CartDropdownContainer,
	CartFooterContainer,
	CartIconContainer,
	CartItemContainer,
	EmptyMessage,
	ItemCount,
} from "./styles";
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
	setOpen,
	sideBarOpen,
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
		<div ref={wrapper}>
			<CartIconContainer onClick={() => toggleCart()}>
				<ShoppingIcon />
				<ItemCount>{cartItemsCount}</ItemCount>
			</CartIconContainer>

			{open && (
				<CartDropdownContainer ref={dropdown}>
					<CartItemContainer>
						{cartItems?.length ? (
							cartItems?.map((item: CartItem) => {
								return (
									<CartItemComponent
										key={`${item.id!}${item.size!}`}
										cartItem={item}
									/>
								);
							})
						) : (
							<EmptyMessage>Your cart is empty</EmptyMessage>
						)}
					</CartItemContainer>
					<CartFooterContainer>
						<span>
							<strong>Quantity: </strong>
							{cartItemsCount} Items
						</span>
						<span>
							<strong>Total: </strong>
							{cartItemsTotalPrice} $
						</span>
					</CartFooterContainer>
					<CustomButton
						onClick={() => {
							history.push(`${match.url}checkout`);
							toggleCart();

							if (sideBarOpen) {
								setOpen(!sideBarOpen);
							}
						}}
					>
						Go TO CHECKOUT
					</CustomButton>
				</CartDropdownContainer>
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

type Props = {
	sideBarOpen: boolean;
	setOpen: (open: boolean) => void;
};

type CartIconProps = ConnectedProps<typeof connector> & RouteComponentProps & Props;

export default withRouter(connector(Cart));
