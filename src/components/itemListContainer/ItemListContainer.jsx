import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemCounter from "../ItemCounter/ItemCounter";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((response) => {
				setProducts(response);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h1 className='title'>{greetings}</h1>
			<ItemList products={products} />
		</div>
	);
}

export default ItemListContainer;
