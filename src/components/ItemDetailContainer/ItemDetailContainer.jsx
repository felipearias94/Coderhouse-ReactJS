import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import Loader from "../shared/Loader/Loader";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/icons/back.svg";

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
					<div>
						<Link to={"../"} className='back-button'>
							<img src={backIcon} alt='volver'></img>
						</Link>
					</div>
					<div className='container'>
						<ItemDetail {...product} />
					</div>
				</>
			)}
		</>
	);
};

export default ItemDetailContainer;
