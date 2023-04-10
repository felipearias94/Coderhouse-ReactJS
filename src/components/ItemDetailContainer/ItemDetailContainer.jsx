import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		getProductById(2).then((res) => setProduct(res));
	});

	return (
		<div className='container'>
			<ItemDetail {...product} />
		</div>
	);
};

export default ItemDetailContainer;
