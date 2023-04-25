import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import PurchaseCheckout from "./components/PurchaseCheckout/PurchaseCheckout";
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./components/assets/fonts/Breathing.ttf";
import "./components/assets/fonts/Blackpast.ttf";
import "./components/assets/fonts/Swiss721.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/shared/NotFoundPage/NotFoundPage";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<Routes>
						<Route
							path='/'
							element={<ItemListContainer greetings={"Bienvenido"} />}
						/>
						<Route
							path='/category/:categoryId'
							element={<ItemListContainer greetings={"Bienvenido"} />}
						/>
						<Route path='/item/:itemId' element={<ItemDetailContainer />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/cart/checkout/' element={<PurchaseCheckout />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</CartProvider>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
