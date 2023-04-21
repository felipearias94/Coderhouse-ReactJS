import "./Item.css";
import NavigationButton from "../shared/NavigationButton/NavigationButton";
import { useState } from "react";
import Loader from "../shared/Loader/Loader";

const Item = ({ id, name, price, img, description }) => {
	const [isLoaded, setIsLoaded] = useState(true);
	const showLoader = () => {
		setIsLoaded(false);
	};
	return (
		<div className='card m-3' style={{ width: "18rem" }}>
			{isLoaded && <Loader isLoaded={isLoaded} />}
			<img
				className='card-img-top'
				src={img}
				alt={`${name}`}
				onLoad={showLoader}
			/>

			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{description}</p>
				<p className='card-price'>{`$ ${price}`}</p>
				<NavigationButton
					goBack={false}
					route={`/item/${id}`}
					label={"Ver detalles"}
				/>
			</div>
		</div>
	);
};

export default Item;
