import { useState, createContext } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	console.log(cart);

	const addItem = (item, quatity) => {
		if (isInCart(item.id)) {
			return;
		}
		setCartTotal(cartTotal + quatity);
		setCart((prev) => [...prev, { item, quatity }]);
	};

	const removeItem = (id) => {
		const updatedCart = cart.filter((prod) => prod.id !== id);
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

	//7) Children: propiedad especial que se utiliza para representar a todos aquellos componentes que puedan necesitar el carrito y sus métodos.
};
