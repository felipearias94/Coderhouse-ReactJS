import cart from "../../assets/icons/cart.svg";
import "./CartWidget.css";

function CartWidget() {
	return (
		<div className='shopping-cart'>
			<img src={cart} alt='shopping-cart' />0
		</div>
	);
}

export default CartWidget;
