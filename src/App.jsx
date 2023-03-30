import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greetings={"Bienvenidos"} />
		</>
	);
}

export default App;
