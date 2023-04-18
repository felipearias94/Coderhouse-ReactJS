import { createContext, useState } from "react";

export const CartContext = createContext({ carrito: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            return;
        }
        setCart(prev => [...prev, { item, quantity }])
    }

    const removeItem = (itemId) => {
        const filteredCart = cart.filter(item => {
            item.id === itemId
        });
        setCart(filteredCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}