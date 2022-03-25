import { FC } from "react"
import { Field, InjectedFormProps, reduxForm, reset } from "redux-form"
import AuthSocialLink from "../authSocialIcon/AuthSocialLink";
import AuthSocialIcon from "../authSocialIcon/AuthSocialLink";
import ActiveButton from "../buttons/ActiveButton"
import { Input } from "../form-controls/form-controls"
import Facebook2 from "../sprite/Facebook2";
import Vk2 from "../sprite/Vk2";
import './Auth.scss';

const afterSubmit = (result: any, dispatch: any) => {
	dispatch(reset('login'))
}

type PropsTypes = {
	handleSubmit: any
	token: any
}



const Login = ({ handleSubmit }: InjectedFormProps, token: string) => {

	return (

		<article className="auth">
			<div className="auth__inner">
				<div className="auth__header">
					<h2 className="auth__title">Войдите или зарегистрируйтесь</h2>
					<ul className="auth__headerList">
						<li><a href="#" className="auth__headerLink auth__headerLink--active">вход</a></li>
						<li><a href="#" className="auth__headerLink">регистрация</a></li>
					</ul>
				</div>
				<div className="auth__body bodyAuth">
					<form onSubmit={handleSubmit} className="auth__form formAuth">
						<div className="formAuth__item">
							<label htmlFor="loginEmail">email</label>
							<Field
								name="email"
								type="email"
								id="loginEmail"
								component={Input}
								placeholder="e-mail"
							/>
						</div>
						<div className="formAuth__item">
							<label htmlFor="loginPassword">пароль</label>
							<Field
								name="password"
								type="password"
								id="loginPassword"
								component={Input}
								placeholder="пароль"
							/>
						</div>

						<div className="bodyAuth__forgotPassword"><a href="#">Забыли пароль?</a></div>
						<p className="bodyAuth__enterSms">Войти с помщью SMS подтверждения</p>
						<div className="bodyAuth__enterSocialNetwork">
							<p>Войти через аккаунт социальной сети</p>
							<ul className="bodyAuth__enterSociaList">
								<li className="bodyAuth__enterSocialIcon">
									<AuthSocialLink><Facebook2 /></AuthSocialLink>
								</li>
								<li className="bodyAuth__enterSocialIcon">
									<AuthSocialLink><Vk2 /></AuthSocialLink>
								</li>
							</ul>
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

const LoginRedux = reduxForm({ form: 'login', onSubmitSuccess: afterSubmit })(Login)

export default LoginRedux