import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import "./fonts/Breathing.ttf";
import "./fonts/Blackpast.ttf";
import "./fonts/Swiss721.ttf";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greetings={"Bienvenidos"} />
		</>
	);
}

export default App;
