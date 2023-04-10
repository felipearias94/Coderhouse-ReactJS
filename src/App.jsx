import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./components/assets/fonts/Breathing.ttf";
import "./components/assets/fonts/Blackpast.ttf";
import "./components/assets/fonts/Swiss721.ttf";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greetings={"Bienvenidos"} />
			<ItemDetailContainer />
		</>
	);
}

export default App;
