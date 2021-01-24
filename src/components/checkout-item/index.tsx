import { FC } from "react";
import { CartItem } from "../../store/cart/types";
import "./index.styles.scss";

const CheckoutItem: FC<CartItem> = ({ imageUrl, name, price, quantity }) => {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<div className='wrapper'>
				<div className='name'>
					<span>{name}</span>
				</div>
				<div className='quantity'>
					<span>{quantity}</span>
				</div>
				<div className='price'>
					<span>{price}</span>
				</div>
				<div className='remove-button'>
					<span>&#10005;</span>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
