import { CartContext } from "../../context/CartContext";
import { endPurchase } from "../../services/FirebaseService";
import NavigationButton from "../shared/NavigationButton/NavigationButton";
import { showToaster } from "../shared/UxResources/Toaster";
import PurchaseDone from "../assets/transaction-done.png";
import "./PurchaseCheckout.css";
import { useState, useEffect, useContext } from "react";

const PurcheseCheckout = () => {
	const purchaseDetails = JSON.parse(sessionStorage.getItem("purchase"));
	const { clearCart } = useContext(CartContext);
	const [orderId, setOrderId] = useState("");
	const [formIsValid, setFormIsValid] = useState(false);
	const [order, setOrder] = useState({
		name: "",
		lastName: "",
		email: "",
		confirmEmail: "",
		phone: "",
	});
	const [validation, setValidation] = useState({
		name: "",
		lastName: "",
		email: "",
		confirmEmail: "",
		phone: "",
	});

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setOrder({ ...order, [name]: value });
	};

	const checkValidation = () => {
		let errors = validation;

		//first Name validation
		if (!order.name.trim()) {
			errors.name = "Tu/s nombre/s son requeridos";
			setFormIsValid(false);
		} else {
			errors.name = "";
			setFormIsValid(true);
		}

		//last Name validation
		if (!order.lastName.trim()) {
			errors.lastName = "Tu apellido es requerido";
			setFormIsValid(false);
		} else {
			errors.lastName = "";
			setFormIsValid(true);
		}

		//phone validation
		if (!order.phone.trim()) {
			errors.phone = "Un teléfono es requerido";
			setFormIsValid(false);
		} else {
			errors.phone = "";
			setFormIsValid(true);
		}

		//match email validation
		if (!order.confirmEmail) {
			errors.confirmEmail = "Tienes que confirmar tu email";
		} else if (order.confirmEmail !== order.email) {
			errors.confirmEmail = "El email no coincide con el anterior";
		} else {
			errors.confirmEmail = "";
			setFormIsValid(true);
		}

		// email validation
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!order.email.trim()) {
			errors.email = "Email es requerido";
			setFormIsValid(false);
		} else if (!order.email.match(emailRegex)) {
			errors.email = "Por favor, ingresa un email válido";
			setFormIsValid(false);
		} else {
			errors.email = "";
			setFormIsValid(true);
		}

		setValidation(errors);
	};

	useEffect(() => {
		checkValidation();
	}, [order]);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		endPurchase(formatPurchaseData())
			.then((docRef) => {
				showToaster("success", "Compra registrada!!");
				setOrderId(docRef.id);
				clearCart();
			})
			.catch(() => {
				showToaster("error", "Algo sucedió");
			});
	};

	const formatPurchaseData = () => {
		return {
			...purchaseDetails,
			buyer: {
				name: order.name,
				lastName: order.lastName,
				email: order.email,
				phone: order.phone,
			},
		};
	};

	const purchaseEnded = () => {
		return (
			<div className='purchase-ended'>
				<img src={PurchaseDone} alt='' />
				<p>
					Gracias por tu compra! Tu código de pedido es:
					<strong>{orderId}</strong>
				</p>
				<NavigationButton
					route={"/"}
					goBack={false}
					label={"Vovler al inicio"}
					fullWidth={true}
				/>
			</div>
		);
	};

	const purchaseForm = () => {
		return (
			<>
				<h2>Datos de envío</h2>
				<hr />
				<div className='form-wrapper'>
					<form onSubmit={formSubmitHandler}>
						<div className='form-group'>
							<label htmlFor='name'>Nombre: </label>
							<input
								name='name'
								className={
									validation.name ? "form-control is-invalid" : "form-control"
								}
								type='text'
								onChange={(e) => handleChange(e)}
								value={order.name}
							/>
							{validation.name && (
								<p className='error-message'>{validation.name}</p>
							)}
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='name'>Apellido: </label>
							<input
								name='lastName'
								className={
									validation.lastName
										? "form-control is-invalid"
										: "form-control"
								}
								type='text'
								onChange={(e) => handleChange(e)}
								value={order.lastName}
							/>
							{validation.lastName && (
								<p className='error-message'>{validation.lastName}</p>
							)}
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='phone'>Teléfono: </label>
							<input
								name='phone'
								className={
									validation.phone ? "form-control is-invalid" : "form-control"
								}
								type='tel'
								onChange={(e) => handleChange(e)}
								value={order.phone}
							/>
							{validation.phone && (
								<p className='error-message'>{validation.phone}</p>
							)}
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='email'>E-Mail: </label>
							<input
								name='email'
								className={
									validation.email ? "form-control is-invalid" : "form-control"
								}
								type='email'
								placeholder='example@example.com'
								onChange={(e) => handleChange(e)}
								value={order.email}
							/>
							{validation.email && (
								<p className='error-message'>{validation.email}</p>
							)}
						</div>

						<div className='form-group pt-3'>
							<label htmlFor='email'>Confirmar E-Mail: </label>
							<input
								name='confirmEmail'
								className={
									validation.confirmEmail
										? "form-control is-invalid"
										: "form-control"
								}
								type='email'
								placeholder='example@example.com'
								onChange={(e) => handleChange(e)}
								value={order.confirmEmail}
							/>
							{validation.confirmEmail && (
								<p className='error-message'>{validation.confirmEmail}</p>
							)}
						</div>

						<button
							type='submit'
							className='btn btn-primary mt-3'
							disabled={!formIsValid}
						>
							Finalizar compra
						</button>
					</form>
					{orderDetails()}
				</div>
			</>
		);
	};

	const orderDetails = () => {
		return (
			<table class='table border-bottom purchase-details '>
				<tbody>
					{purchaseDetails.products.map((cart) => (
						<tr key={cart.item.id} scope='row'>
							<td>{cart.item.name}</td>
							<td>x {cart.quantity}</td>
							<td>$ {cart.item.price}</td>
						</tr>
					))}
					<tr>
						<th colSpan={2}>Total: </th>
						<td> ${purchaseDetails.amount}</td>
					</tr>
				</tbody>
			</table>
		);
	};

	return (
		<>
			<NavigationButton route='../cart' />
			<div className='container'>
				{orderId ? purchaseEnded() : purchaseForm()}
			</div>
		</>
	);
};

export default PurcheseCheckout;
