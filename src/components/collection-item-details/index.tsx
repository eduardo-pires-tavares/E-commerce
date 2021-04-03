import CustomButton from "../custom-button";
import { ImageContainer } from "../menu-item/styles";
import {
	DetailCard,
	DetailWrapper,
	TopInfo,
	Size,
	SizeInfo,
	ButtonContainer,
	GoBackContainer,
	GoBack,
} from "./styles";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Dispatch, FC, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { CartActionTypes, CartItem } from "../../store/cart/types";
import { addToCart } from "../../store/cart/actions";
import { ApplicationState } from "../../store";
import { selectCollection } from "../../store/shop/selectors";

const CollectionItemDetail: FC<CollectionItemDetailProps> = ({
	addItemToCart,
	history,
	collectionItem,
	match,
	location,
}) => {
	const { itemName } = match.params;

	const item = collectionItem.items.find(({ name }) => name === itemName);

	const { imageUrl, name, price, id } = item!;

	const [selectedSize, setSelectedSize] = useState<string>("M");

	const sizes: string[] = ["XS", "S", "M", "L", "XL"];

	const handleSizeClick = (size: string) => {
		setSelectedSize(size);
	};

	return (
		<DetailCard>
			<GoBackContainer>
				<GoBack to={location.state?.from ? location.state?.from : "/shop"}>
					<RiArrowGoBackLine />
				</GoBack>
			</GoBackContainer>
			<ImageContainer style={{ border: "1px solid black" }} backgroundImage={imageUrl!} />
			<DetailWrapper>
				<TopInfo>
					<h1>{name}</h1>
					<h1>{price} $</h1>
				</TopInfo>
				<SizeInfo>
					{sizes.map(size => {
						if (size === selectedSize) {
							return (
								<Size key={size} active>
									{size}
								</Size>
							);
						}

						return (
							<Size key={size} onClick={() => handleSizeClick(size)}>
								{size}
							</Size>
						);
					})}
				</SizeInfo>
				<ButtonContainer>
					<CustomButton
						onClick={() =>
							addItemToCart({
								imageUrl,
								name,
								price,
								id,
								size: selectedSize,
								quantity: 1,
							})
						}
					>
						ADD TO CART
					</CustomButton>
					<CustomButton
						onClick={() => {
							addItemToCart({
								imageUrl,
								name,
								price,
								id,
								size: selectedSize,
								quantity: 1,
							});
							history.push("/checkout");
						}}
					>
						BUY NOW!
					</CustomButton>
				</ButtonContainer>
			</DetailWrapper>
		</DetailCard>
	);
};

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps<RouteProps>) => {
	const {
		match: { params },
	} = ownProps;

	return {
		collectionItem: selectCollection(params.collection)(state),
	};
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	addItemToCart: (item: CartItem) => dispatch(addToCart(item)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type LocationState = {
	from: Location;
};

type RouteProps = {
	collection: string;
	itemName: string;
};

type CollectionItemDetailProps = ConnectedProps<typeof connector> &
	RouteComponentProps<RouteProps, {}, LocationState>;

export default withRouter(connector(CollectionItemDetail));
