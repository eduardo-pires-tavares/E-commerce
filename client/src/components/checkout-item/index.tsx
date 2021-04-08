import { FC, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { clearItemFromCart, removeFromCart, addToCart } from "../../store/cart/actions";
import { CartItem, CartActionTypes } from "../../store/cart/types";
import {
	CheckoutItemContainer,
	Decrease,
	ImageContainer,
	Increase,
	ItemContainer,
	NameContainer,
	PriceQuantityContainer,
} from "./styles";
import CustomButton from "../custom-button";

const CheckoutItem: FC<CheckoutItemProps> = ({
	cartItem,
	clearItemFromCart,
	removeItemFromCart,
	addItemToCart,
}) => {
	const { imageUrl, name, price, quantity, size } = cartItem;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item' />
				<CustomButton onClick={() => clearItemFromCart(cartItem)} inverted>
					Remove
				</CustomButton>
			</ImageContainer>
			<ItemContainer>
				<NameContainer>
					<span>{name}</span>
				</NameContainer>

				<PriceQuantityContainer>
					<>
						<span>
							<strong>Price: </strong>
							{price} $
						</span>
					</>
					<>
						<span>
							<strong>Quantity: </strong>
							<Decrease
								onClick={() =>
									quantity !== 1
										? removeItemFromCart(cartItem)
										: clearItemFromCart(cartItem)
								}
							>
								&#10094;
							</Decrease>
							{quantity}
							<Increase onClick={() => addItemToCart(cartItem)}>&#10095;</Increase>
						</span>
					</>
				</PriceQuantityContainer>
				<>
					<span style={{ marginBottom: "5px" }}>
						<strong>Size: </strong>
						{size}
					</span>
					<span style={{ marginBottom: "5px" }}>
						<strong>Sub-Total: </strong>
						{price! * quantity!} $
					</span>
				</>
			</ItemContainer>
		</CheckoutItemContainer>
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
