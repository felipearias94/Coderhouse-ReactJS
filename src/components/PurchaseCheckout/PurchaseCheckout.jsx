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
	const [isSubmit, setIsSubmit] = useState(false);
	const [order, setOrder] = useState({
		name: "",
		lastName: "",
		email: "",
		confirmEmail: "",
		phone: "",
	});
	const [formErrors, setFormErrors] = useState({});

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setOrder({ ...order, [name]: value });
	};

	const checkValidation = (order) => {
		const errors = {};
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		//first Name validation
		if (!order.name) {
			errors.name = "Tu/s nombre/s son requeridos";
		}

		//last Name validation
		if (!order.lastName) {
			errors.lastName = "Tu apellido es requerido";
		}

		//phone validation
		if (!order.phone) {
			errors.phone = "Un teléfono es requerido";
		}

		// email validation

		if (!order.email) {
			errors.email = "Email es requerido";
		} else if (!order.email.match(emailRegex)) {
			errors.email = "Por favor, ingresa un email válido";
		}

		//match email validation
		if (!order.confirmEmail) {
			errors.confirmEmail = "Tienes que confirmar tu email";
		} else if (order.confirmEmail !== order.email) {
			errors.confirmEmail = "El email no coincide con el anterior";
		}
		setIsSubmit(Object.keys(formErrors).length === 0);
		return errors;
	};

	useEffect(() => {
		setIsSubmit((current) => {
			return current && Object.keys(formErrors).length === 0;
		});
	}, [order]);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		setFormErrors(checkValidation(order));
		if (isSubmit) {
			endPurchase(formatPurchaseData())
				.then((docRef) => {
					showToaster("success", "Compra registrada!!");
					setOrderId(docRef.id);
					clearCart();
				})
				.catch(() => {
					showToaster("error", "Algo sucedió");
				});
		}
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
									formErrors.name ? "form-control is-invalid" : "form-control"
								}
								type='text'
								onChange={(e) => handleChange(e)}
								value={order.name}
							/>
							{formErrors.name && (
								<p className='error-message'>{formErrors.name}</p>
							)}
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='name'>Apellido: </label>
							<input
								name='lastName'
								className={
									formErrors.lastName
										? "form-control is-invalid"
										: "form-control"
								}
								type='text'
								onChange={(e) => handleChange(e)}
								value={order.lastName}
							/>
							{formErrors.lastName && (
								<p className='error-message'>{formErrors.lastName}</p>
							)}
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='phone'>Teléfono: </label>
							<input
								name='phone'
								className={
									formErrors.phone ? "form-control is-invalid" : "form-control"
								}
								type='tel'
								onChange={(e) => handleChange(e)}
								value={order.phone}
							/>
							{formErrors.phone && (
								<p className='error-message'>{formErrors.phone}</p>
							)}
						</div>
						<div className='form-group pt-3'>
							<label htmlFor='email'>E-Mail: </label>
							<input
								name='email'
								className={
									formErrors.email ? "form-control is-invalid" : "form-control"
								}
								type='email'
								placeholder='example@example.com'
								onChange={(e) => handleChange(e)}
								value={order.email}
							/>
							{formErrors.email && (
								<p className='error-message'>{formErrors.email}</p>
							)}
						</div>

						<div className='form-group pt-3'>
							<label htmlFor='email'>Confirmar E-Mail: </label>
							<input
								name='confirmEmail'
								className={
									formErrors.confirmEmail
										? "form-control is-invalid"
										: "form-control"
								}
								type='email'
								placeholder='example@example.com'
								onChange={(e) => handleChange(e)}
								value={order.confirmEmail}
							/>
							{formErrors.confirmEmail && (
								<p className='error-message'>{formErrors.confirmEmail}</p>
							)}
						</div>

						<button type='submit' className='btn btn-primary mt-3'>
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
