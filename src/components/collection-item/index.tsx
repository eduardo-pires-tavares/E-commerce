import { Dispatch, FC, useState, useEffect } from "react";
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
import { AiFillCheckCircle } from "react-icons/ai";

const CollectionItem: FC<CollectionItemProps> = ({ imageUrl, name, price, id, addToCart }) => {
	const [backgroundImage, setBackgroundImage] = useState<string>("");
	const [addedToCartIcon, setAddedToCartIcon] = useState<boolean>(false);

	useEffect(() => {
		const img = new Image();
		img.src = imageUrl;
		img.onload = () => setBackgroundImage(imageUrl);
	}, [imageUrl]);

	useEffect(() => {
		if (addedToCartIcon) {
			const timer = setTimeout(() => {
				setAddedToCartIcon(false);
			}, 100);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [addedToCartIcon]);

	return (
		<>
			{backgroundImage && (
				<CollectionItemContainer className='collection-item'>
					<ImageContainer backgroundImage={backgroundImage} />
					<CollectionItemFooter>
						<Name>{name}</Name>
						<Price>{price} $</Price>
					</CollectionItemFooter>
					<CustomButton
						inverted
						onClick={() => {
							addToCart({ id, name, price, imageUrl, quantity: 1 });
							setAddedToCartIcon(true);
						}}
					>
						ADD TO CART
						{addedToCartIcon && (
							<AiFillCheckCircle
								style={{
									color: "green",
									position: "absolute",
									top: "35%",
									right: "20px",
								}}
							/>
						)}
					</CustomButton>
				</CollectionItemContainer>
			)}
		</>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	addToCart: (item: CartItem) => dispatch(addToCart(item)),
});

const connector = connect(null, mapDispatchToProps);

type CollectionItemProps = ConnectedProps<typeof connector> & ITEMS;

export default connector(CollectionItem);
