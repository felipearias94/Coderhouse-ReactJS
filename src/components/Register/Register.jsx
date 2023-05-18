import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "../shared/Alert/Alert";

const Register = () => {
	const { signUp, sendVerificationEmail } = useAuth();
	const navigate = useNavigate();
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState();

	const handlerChange = ({ target: { name, value } }) => {
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(userCredentials);
			navigate("/");
		} catch (error) {
			if (error.code === "auth/internal-error") {
				setError("Correo Inválido.");
			}
			if (error.code === "auth/weak-password") {
				setError("Contraseña inválida. Tiene que tener al menos 6 caracteres.");
			}
			if (error.code === "auth/email-already-in-use") {
				setError("Este correo ya se encuentra en uso.");
			}
		}
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					className='form-control mb-3'
					type='email'
					name='email'
					id='email'
					placeholder='youremail@mail.com'
					onChange={handlerChange}
				/>

				<label htmlFor='password'>Contraseña</label>
				<input
					className='form-control mb-3'
					type='password'
					name='password'
					id='password'
					onChange={handlerChange}
				/>
				{error && <Alert message={error} />}
				<button className='btn btn-primary mt-3' type='submit'>
					Registrarse
				</button>
			</form>
		</div>
	);
};

export default Register;
