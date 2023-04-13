import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./components/assets/fonts/Breathing.ttf";
import "./components/assets/fonts/Blackpast.ttf";
import "./components/assets/fonts/Swiss721.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/shared/NotFoundPage/NotFoundPage";

function App() {
	return (
		<>
			<BrowserRouter>
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
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
