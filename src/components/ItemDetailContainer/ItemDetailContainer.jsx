import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import Loader from "../shared/Loader/Loader";
import { getProductById } from "../../services/FirebaseService";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import NavigationButton from "../shared/NavigationButton/NavigationButton";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [products, setProducts] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		getProductById(itemId)
			.then((snapshot) => {
				setProducts({ id: snapshot.id, ...snapshot.data() });
			})
			.finally(setIsLoaded(false));
	}, [itemId]);
	return (
		<>
			{isLoaded ? (
				<Loader isLoaded={isLoaded} />
			) : (
				<>
					<NavigationButton route='../' />
					<div className='container'>
						<ItemDetail {...products} />
					</div>
				</>
			)}
		</>
	);
};

export default ItemDetailContainer;
