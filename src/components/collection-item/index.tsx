import { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ITEMS } from "../../store/shop/types";
import { addToCart } from "../../store/cart/actions";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import {
	CollectionItemContainer,
	CollectionItemFooter,
	ImageContainer,
	Name,
	Price,
} from "./styles";
import CustomButton from "../custom-button";

const CollectionItem = ({ imageUrl, name, price, id, addToCart }: CollectionItemProps) => {
	return (
		<CollectionItemContainer className='collection-item'>
			<ImageContainer backgroundImage={imageUrl} />
			<CollectionItemFooter>
				<Name>{name}</Name>
				<Price>{price} $</Price>
			</CollectionItemFooter>
			<CustomButton
				inverted
				onClick={() => addToCart({ id, name, price, imageUrl, quantity: 1 })}
			>
				ADD TO CART
			</CustomButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	addToCart: (item: CartItem) => dispatch(addToCart(item)),
});

const connector = connect(null, mapDispatchToProps);

type CollectionItemProps = ConnectedProps<typeof connector> & ITEMS;

export default connector(CollectionItem);
