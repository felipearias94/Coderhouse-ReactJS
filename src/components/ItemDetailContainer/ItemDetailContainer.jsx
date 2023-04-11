import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		getProductById(itemId).then((res) => setProduct(res));
	}, [itemId]);

	return (
		<div className='container'>
			<Link to={"../"}>Volver</Link>

			<ItemDetail {...product} />
		</div>
	);
};

export default ItemDetailContainer;
