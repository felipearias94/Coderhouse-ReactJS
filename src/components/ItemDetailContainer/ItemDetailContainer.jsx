import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import Loader from "../shared/Loader/Loader";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [product, setProduct] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		getProductById(itemId)
			.then((res) => {
				setIsLoaded(false);
				setProduct(res);
			})
			.finally(setIsLoaded(true));
	}, [itemId]);

	return (
		<>
			{isLoaded && <Loader isLoaded={isLoaded} />}
			<div className='container'>
				<Link to={"../"}>Volver</Link>

				<ItemDetail {...product} />
			</div>
		</>
	);
};

export default ItemDetailContainer;
