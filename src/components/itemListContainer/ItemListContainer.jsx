import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategoryId } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import Loader from "../shared/Loader/Loader";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
	const [products, setProducts] = useState([]);
	const [isLoaded, setIsLoaded] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		const productFunction = categoryId ? getProductsByCategoryId : getProducts;
		
		productFunction(categoryId)
			.then((response) => {
				setIsLoaded(false);
				setProducts(response);
			})
			.catch((error) => console.error(error))
			.finally(setIsLoaded(true));
	}, [categoryId]);

	return (
		<div>
			{isLoaded && <Loader isLoaded={isLoaded} />}

			<h1 className='title'>{greetings}</h1>
			<ItemList products={products} />
		</div>
	);
}

export default ItemListContainer;
