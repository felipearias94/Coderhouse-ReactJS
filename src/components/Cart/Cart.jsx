import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
	const context = useContext(CartContext);
	return (
		<>
			<div className='container'>
				{context.cart.length == 0 ? (
					<p>No hay nada che</p>
				) : (
					<p>Hay unas cositas</p>
				)}
			</div>
		</>
	);
};

export default Cart;
