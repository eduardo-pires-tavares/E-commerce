import "./index.styles.scss";
import { CartItem } from "../../store/cart/types";

const CartItemComponent = ({ imageUrl, name, price, quantity }: CartItem) => {
	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='item'></img>
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x {price}$
				</span>
			</div>
		</div>
	);
};

export default CartItemComponent;
