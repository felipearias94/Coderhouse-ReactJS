import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<ItemListContainer greetings={'Bienvenidos'} />
		</div>
	);
}

export default App;
