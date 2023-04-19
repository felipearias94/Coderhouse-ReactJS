import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartWidget.css";

function CartWidget() {
	const { cartTotal } = useContext(CartContext);

	return (
		<div className='shopping-cart '>
			<img src={cartIcon} alt='shopping-cart' />
			{cartTotal}
		</div>
	);
}

export default CartWidget;
