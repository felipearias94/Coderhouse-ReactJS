import "./Item.css";
import CustomButton from "../shared/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img, description }) => {
	return (
		<div className='card m-3' style={{ width: "18rem" }}>
			<img className='card-img-top' src={img} alt={`${name}`} />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{description}</p>
				<p className='card-price'>{`$ ${price}`}</p>
				<Link to={`/item/${id}`}>
					<CustomButton label={"Ver detalles"} importance={"primary"} />
				</Link>
			</div>
		</div>
	);
};

export default Item;
