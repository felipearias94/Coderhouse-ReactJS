import "./Item.css";
import NavigationButton from "../shared/NavigationButton/NavigationButton";

const Item = ({ id, name, price, img, description }) => {
	return (
		<div className='card m-3' style={{ width: "18rem" }}>
			<img className='card-img-top' src={img} alt={`${name}`} />
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
