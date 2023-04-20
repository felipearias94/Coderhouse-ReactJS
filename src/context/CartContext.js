import { useState, createContext } from "react";

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
	};

	const removeItem = (id) => {
		const updatedCart = cart.filter((prod) => prod.item.id !== id);
		console.log('aqui', updatedCart)
		setCart(updatedCart);
	};

	const clearCart = () => {
		setCart([]);
		setCartTotal(0);
	};

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
