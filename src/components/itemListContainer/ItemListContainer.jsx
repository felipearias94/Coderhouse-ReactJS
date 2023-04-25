import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	getProducts,
	getProductsByCategoryId,
} from "../../services/FirebaseService";
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
			.then((snapshot) => {
				setProducts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})),
				);
			})
			.finally(setIsLoaded(false));
	}, [categoryId]);

	return (
		<>
			{isLoaded ? (
				<Loader isLoaded={isLoaded} />
			) : (
				<div>
					<h1 className='title'>{greetings}</h1>
					<ItemList products={products} />
				</div>
			)}
		</>
	);
}

export default ItemListContainer;
