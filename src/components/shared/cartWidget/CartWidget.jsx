import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import emptyCartIcon from "../../assets/icons/emptyCart.svg";
import fullCartIcon from "../../assets/icons/fullCart.svg";
import "./CartWidget.css";

function CartWidget() {
	const { cartTotal } = useContext(CartContext);

	return (
		<div className='shopping-cart '>
			<img
				src={cartTotal === 0 ? emptyCartIcon : fullCartIcon}
				alt='shopping-cart'
			/>
			{cartTotal}
		</div>
	);
}

export default CartWidget;
