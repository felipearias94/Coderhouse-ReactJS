import { useState, createContext, useEffect } from "react";
import { showToaster } from "../components/shared/UxResources/Toaster";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);
	const [cartTotal, setCartTotal] = useState(sessionStorage.getItem('cartTotal') || 0);

	useEffect(() => {
		updateSessionStorage();
	}, [cart]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			showToaster('error', 'Ya está en el carrito');
			return;
		}
		setCartTotal(cartTotal + quantity);
		setCart((prev) => [...prev, { item, quantity }]);
		updateSessionStorage();
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
		showToaster('info', 'Se vació el carrito!');
	};

	const updateCartTotalItem = (newCartItems) => {
		const newValue = newCartItems.reduce((total, item) => total + item.quantity, 0)
		setCartTotal(newValue);
	}

	const isInCart = (id) => {
		return cart.some((prod) => prod.item.id === id);
	};

	const updateSessionStorage = () => {
		sessionStorage.setItem("cartTotal", cartTotal);
		sessionStorage.setItem('cart', JSON.stringify(cart));
	}

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, clearCart, cartTotal }}
		>
			{children}
		</CartContext.Provider>
	);
};
