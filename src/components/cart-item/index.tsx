import { Dispatch, FC } from "react";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import { connect, ConnectedProps } from "react-redux";
import { clearItemFromCart } from "../../store/cart/actions";
import { CartItemContainer, ActionContainer, ItemDetailsContainer, Name, Remove } from "./styles";

const CartItemComponent: FC<CartItemProps> = ({ cartItem, clearItemFromCart }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt='item'></img>
			<ItemDetailsContainer>
				<ActionContainer>
					<Name>{name}</Name>
					<Remove onClick={() => clearItemFromCart(cartItem)}>&#10006;</Remove>
				</ActionContainer>
				<span>
					{quantity} x {price}$
				</span>
			</ItemDetailsContainer>
		</CartItemContainer>
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
