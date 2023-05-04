import { serverTimestamp } from "firebase/firestore";
import { endPurchase } from "../../services/FirebaseService";
import NavigationButton from "../shared/NavigationButton/NavigationButton";
import "./PurchaseCheckout.css";
import { useState } from "react";
import { showToaster } from "../shared/UxResources/Toaster";

const PurcheseCheckout = () => {
	const purchaseDetails = JSON.parse(sessionStorage.getItem("purchase"));
	const [orderId, setOrderId] = useState("");
	const [state, setState] = useState({
		name: "",
		lastName: "",
		email: "", // hacer validacion de ambos emails
		phone: "",
	});
	
	let formIsValid = true;

	const formSubmitHandler = (e) => {
		e.preventDefault();
		endPurchase(formatPurchaseData())
			.then((docRef) => {
				showToaster("success", "Compra registrada!!");
				setOrderId(docRef.id);
				//vaciar carrito acá
			})
			.catch(() => {
				showToaster("error", "Algo sucedió");
			});
	};

	const formatPurchaseData = () => {
		return { ...purchaseDetails, buyer: { ...state } };
	};

	const checkEmail = (emailToConfirm) => {
		return emailToConfirm === state.email;
	};

	return (
		<>
			<NavigationButton route='../cart' />
			<div className='container'>
				<h2>Datos de envío</h2>
				<hr />
				<div className='form-wrapper'>
					<form onSubmit={formSubmitHandler}>
						<div className='form-group'>
							<label htmlFor='name'>Nombre: </label>
							<input
								id='name'
								className='form-control'
								type='text'
								onChange={(e) => setState({ ...state, name: e.target.value })}
							/>
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='name'>Apellido: </label>
							<input
								id='name'
								className='form-control'
								type='text'
								onChange={(e) =>
									setState({ ...state, lastName: e.target.value })
								}
							/>
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='phone'>Teléfono: </label>
							<input
								id='phone'
								className='form-control'
								type='tel'
								onChange={(e) => setState({ ...state, phone: e.target.value })}
							/>
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='email'>E-Mail: </label>
							<input
								id='email'
								className='form-control'
								type='email'
								placeholder='example@example.com'
								onChange={(e) => setState({ ...state, email: e.target.value })}
							/>
						</div>

						<div className='form-group pt-3'>
							<label htmlFor='email'>Confirmar E-Mail: </label>
							<input
								id='email'
								className='form-control'
								type='email'
								placeholder='example@example.com'
								onChange={(e) => checkEmail(e.target.value)}
							/>
						</div>

						<button
							type='submit'
							className='btn btn-primary mt-3'
							disabled={!formIsValid ? true : false}
						>
							Finalizar compra
						</button>
					</form>
					<div className='purchase-details'>
						{purchaseDetails.products.map((cart) => (
							<div key={cart.item.id}>
								<p>{cart.item.name}</p>
								<p>x {cart.quantity}</p>
								<p>$ {cart.item.price}</p>
							</div>
						))}
						<hr />
						<p>${purchaseDetails.amount}</p>
					</div>
					{orderId && (
						<strong>
							Gracias por tu compra! Tu código de pedido es: {orderId}
						</strong>
					)}
				</div>
			</div>
			;
		</>
	);
};

export default PurcheseCheckout;
