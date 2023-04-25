import { useState, createContext } from "react";
import { showToaster } from "../components/shared/UxResources/Toaster";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			return;
		}
		setCartTotal(cartTotal + quantity);
		setCart((prev) => [...prev, { item, quantity }]);
		const toastMessage = quantity === 1 ? `Agregaste un item al carrito!` : `Agregaste ${quantity} items al carrito!`
		showToaster('info', toastMessage);
	};

	const removeItem = (item) => {
		const updatedCart = cart.filter((prod) => prod.item.id !== item.id);
		setCart(updatedCart);
		updateCartTotalItem(updatedCart);
		showToaster('error', `Listo! Eliminaste ${item.name} del carrito`);
	};

	const clearCart = () => {
		setCart([]);
		setCartTotal(0);
		showToaster('error', 'Se vació el carrito!');
	};

	const updateCartTotalItem = (newCartItems) => {
		const newValue = newCartItems.reduce((total, item) => total + item.quantity, 0)
		setCartTotal(newValue);
	}

	const isInCart = (id) => {
		return cart.some((prod) => prod.item.id === id);
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, clearCart, cartTotal }}
		>
			{children}
		</CartContext.Provider>
	);
};
