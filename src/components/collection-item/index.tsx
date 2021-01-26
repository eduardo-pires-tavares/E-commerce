import { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ITEMS } from "../../store/shop/types";

import { addToCart } from "../../store/cart/actions";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import CustomButton from "../custom-button";

import "./index.styles.scss";

const CollectionItem = ({ imageUrl, name, price, id, addToCart }: CollectionItemProps) => {
	return (
		<div className={`collection-item ${id}`}>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='collection-item-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price} $</span>
			</div>

			<CustomButton style={{ top: "120px" }} inverted>
				DETAILS
			</CustomButton>
			<CustomButton
				inverted
				onClick={() => addToCart({ id, name, price, imageUrl, quantity: 1 })}
			>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	addToCart: (item: CartItem) => dispatch(addToCart(item)),
});

const connector = connect(null, mapDispatchToProps);

type CollectionItemProps = ConnectedProps<typeof connector> & ITEMS;

export default connector(CollectionItem);
