import ItemCounter from "../ItemCounter/ItemCounter";
import "./Item.css";

const Item = ({ name, price, img, description }) => {
	return (
		<div className='card m-3' style={{ width: "18rem" }}>
			<img className='card-img-top' src={img} alt={`image ${name}`} />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{description}</p>
				<p className='card-price'>{`$ ${price}`}</p>
				<a href='#' className='btn btn-primary'>
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Item;
