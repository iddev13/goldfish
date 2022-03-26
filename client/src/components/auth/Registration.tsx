import { FC } from "react";
import { Field, InjectedFormProps, reduxForm, reset } from "redux-form"
import ActiveButton from "../buttons/ActiveButton";
import { Input } from "../form-controls/form-controls";
import './Auth.scss';


const afterSubmit = (result: any, dispatch: any) => {
	dispatch(reset('login'))
}

type PropsTypes = {
	handleSubmit: any
	token: any
}

const Registration = ({ handleSubmit }: InjectedFormProps, setIsLogin: any) => {

	const handleIsLogin = (event: any) => {
		event.preventDefault()
		setIsLogin(true)
	}

	return (
		<article className="auth">
			<div className="auth__inner">
				<div className="auth__header">
					<h2 className="auth__title">Войдите или зарегистрируйтесь</h2>
					<ul className="auth__headerList">
						<li><a href="#" className="auth__headerLink" onClick={handleIsLogin}>вход</a></li>
						<li><a href="#" className="auth__headerLink auth__headerLink--active" onClick={handleIsLogin}>регистрация</a></li>
					</ul>
				</div>
				<div className="auth__body bodyAuth">
					<form onSubmit={handleSubmit} className="auth__form formAuth">
						<div className="formAuth__item">
							<label htmlFor="registrationName">имя</label>
							<Field
								name="name"
								type="text"
								id="registrationName"
								component={Input}
								placeholder="имя"
							/>
						</div>
						<div className="formAuth__item">
							<label htmlFor="registrationSurname">фамилия</label>
							<Field
								name="surname"
								type="text"
								id="registrationSurname"
								component={Input}
								placeholder="фамилия"
							/>
						</div>

						<div className="formAuth__item">
							<label htmlFor="emailName">e-mail или телефон</label>
							<Field
								name="emailTel"
								type="text"
								id="emailName"
								component={Input}
								placeholder="e-mail или телефон"
							/>
						</div>

						<div className="formAuth__item">
							<label htmlFor="registrationPassword">пароль</label>
							<Field
								name="registrationPassword"
								type="password"
								id="registrationPassword"
								component={Input}
								placeholder="пароль"
							/>
							<span className="formAuth__itemInfo">мининум 6 символов</span>
						</div>

						<div className="formAuth__item">
							checkboxes
						</div>

						<div className="auth__Btn">
							<ActiveButton>Войти</ActiveButton>
						</div>

					</form>

				</div>
			</div>
		</article>
	)
}

const RegistrationRedux = reduxForm({ form: 'login', onSubmitSuccess: afterSubmit })(Registration)

export default RegistrationRedux