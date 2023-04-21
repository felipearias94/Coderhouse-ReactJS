import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import Loader from "../shared/Loader/Loader";
import { getProductById } from "../../Api/apiMethods";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import NavigationButton from "../shared/NavigationButton/NavigationButton";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [product, setProduct] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		getProductById(itemId)
			.then((snapshot) => {
				setProduct({ id: snapshot.id, ...snapshot.data() });
				console.log("aaaaaaaaaaa", product);
			})
			.finally(setIsLoaded(false));
		console.log("aaaaaaaaaaa", product);
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
