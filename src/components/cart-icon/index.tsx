import { Dispatch, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import { toggleCart } from "../../store/cart/actions";
import { CartActionTypes } from "../../store/cart/types";

import "./index.styles.scss";

const CartIcon: FC<CartIconProps> = ({ toggleCart }) => {
	return (
		<div className='cart-icon' onClick={() => toggleCart()}>
			<ShoppingIcon className='shoping-icon' />
			<span className='item-count'>999</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
	toggleCart: () => dispatch(toggleCart()),
});

const connector = connect(null, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>;

export default connector(CartIcon);
