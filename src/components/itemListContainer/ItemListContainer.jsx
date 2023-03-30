import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
	return (
		<>
			<h1 className='title'>{greetings}</h1>
			<ItemCounter min={1} max={10} />
		</>
	);
}

export default ItemListContainer;
