import cart from "../../assets/icons/cart.svg";
import "./CartWidget.css";

function CartWidget({ itemCounter }) {
	return (
		<div className='shopping-cart '>
			<img src={cart} alt='shopping-cart' />
			{itemCounter}
		</div>
	);
}

export default CartWidget;
