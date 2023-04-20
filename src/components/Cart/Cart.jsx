import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import deleteIcon from "../assets/icons/delete-icon.svg";
import CustomButton from "../shared/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/emptyCart.png";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
	const context = useContext(CartContext);
	const navigate = useNavigate();
	const [colSpanSize, setColSpanSize] = useState(4);
	useEffect(() => {
		window.addEventListener("resize", isMobile);
		return () => {
			window.removeEventListener("resize", isMobile);
		};
	});

	const isMobile = () => {
		window.innerWidth >= 768 ? setColSpanSize(4) : setColSpanSize(3);
	};

	const navigateToHome = () => {
		navigate("/");
	};

	const clearCartItems = () => {
		context.clearCart();
	};

	const totalPurchase = context.cart.reduce(
		(total, item) => total + item.item.price * item.quantity,
		0,
	);

	const endPurchase = () => {
		const purchaseData = {
			products: context.cart,
			amount: totalPurchase,
		};
		console.log(purchaseData);
		navigate("./checkout");
	};

	const removeCartItem = (itemId) => {
		context.removeItem(itemId);
	};

	const EmtyCart = () => {
		return (
			<div className='empty-cart'>
				<img src={emptyCart} alt='carrito-vacio' />
				<h2>Tu carrito está vacío</h2>
				<CustomButton
					label={"Volver a comprar"}
					importance={"primary"}
					actionHandler={navigateToHome}
				/>
			</div>
		);
	};

	const CartItemListed = () => {
		return (
			<>
				<table className='full-cart' id='full-cart'>
					<tr>
						<th className='delete-item'></th>
						<th id='removable'></th>
						<th>Producto</th>
						<th>Cant.</th>
						<th>Precio</th>
					</tr>
					{context.cart.map((cartItem) => (
						<tr className='item-data' key={cartItem.item.id}>
							<td className='delete-item'>
								<button
									className='btn btn-outline p-0'
									onClick={() => removeCartItem(cartItem.item.id)}
								>
									<img src={deleteIcon} alt='' />
								</button>
							</td>
							<td id='removable'>
								<img src={cartItem.item.img} alt='' />
							</td>
							<td>{cartItem.item.name}</td>
							<td>x {cartItem.quantity}</td>
							<td>$ {cartItem.item.price}</td>
						</tr>
					))}

					<tfoot id='table-total'>
						<tr>
							<th colSpan={colSpanSize}>Total: </th>
							<td>$ {totalPurchase}</td>
						</tr>
					</tfoot>
				</table>
				<div className='actions'>
					<CustomButton
						label={"Vaciar carrito"}
						importance={"light"}
						actionHandler={clearCartItems}
					/>
					<CustomButton
						label={"Finalizar compra"}
						importance={"primary"}
						actionHandler={endPurchase}
					/>
				</div>
			</>
		);
	};

	return (
		<>
			<div className='container'>
				{context.cart.length == 0 ? <EmtyCart /> : <CartItemListed />}
			</div>
		</>
	);
};

export default Cart;
