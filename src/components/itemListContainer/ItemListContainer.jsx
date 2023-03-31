import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemCounter from "../ItemCounter/ItemCounter";
import ItemList from "../ItemList/ItemList";
import Loader from "../shared/Loader/Loader";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
	const [products, setProducts] = useState([]);
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		getProducts()
			.then((response) => {
				setIsLoaded(false);
				setProducts(response);
			})
			.catch((error) => console.error(error))
			.finally(setIsLoaded(true));
	}, []);

	return (
		<div>
			<Loader isLoaded={isLoaded} />
			<h1 className='title'>{greetings}</h1>
			<ItemList products={products} />
		</div>
	);
}

export default ItemListContainer;
