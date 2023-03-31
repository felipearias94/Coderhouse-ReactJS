import "./Item.css";
import CustomButton from "../shared/CustomButton/CustomButton";

const Item = ({ name, price, img, description }) => {
	const itemDetailHandler = () => {};
	return (
		<div className='card m-3' style={{ width: "18rem" }}>
			<img className='card-img-top' src={img} alt={`image ${name}`} />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{description}</p>
				<p className='card-price'>{`$ ${price}`}</p>
				<CustomButton
					label={"Ver detalles"}
					importance={"primary"}
					actionHandler={itemDetailHandler}
				/>
			</div>
		</div>
	);
};

export default Item;
