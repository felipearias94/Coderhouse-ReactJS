import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
	const { cartTotal } = useContext(CartContext);

	return (
		<Link to={"./cart"}>
			<div className='shopping-cart '>
				<img src={cartIcon} alt='shopping-cart' />
				{cartTotal}
			</div>
		</Link>
	);
}

export default CartWidget;
