import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import cart from "../../assets/icons/cart.svg";
import "./CartWidget.css";

function CartWidget() {
	const itemCounter = useContext(CartContext);
	
	return (
		<div className='shopping-cart '>
			<img src={cart} alt='shopping-cart' />
			{itemCounter}
		</div>
	);
}

export default CartWidget;
