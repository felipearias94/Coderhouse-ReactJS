import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import Loader from "../shared/Loader/Loader";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import NavigationButton from "../shared/NavigationButton/NavigationButton";

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
			{isLoaded ? (
				<Loader isLoaded={isLoaded} />
			) : (
				<>
					<NavigationButton route='../' />
					<div className='container'>
						<ItemDetail {...product} />
					</div>
				</>
			)}
		</>
	);
};

export default ItemDetailContainer;
