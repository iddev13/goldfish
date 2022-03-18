import { FC } from "react"
import { Field, reduxForm, reset } from "redux-form"
import { Input } from "../form-controls/form-controls"

const afterSubmit = (result: any, dispatch: any) => {
	dispatch(reset('login'))
}

const Enter: FC = () => {
	return (
		<article className="auth">
			<div className="auth__inner">
				<div className="auth__header">
					<h2>Войдите или зарегистрируйтесь</h2>
					<ul>
						<li>вход</li>
						<li>регистрация</li>
					</ul>
				</div>
				<div className="auth__body">
					<form action="/" className="auth__form formAuth">
						<div className="formAuth__item">
							<label htmlFor="loginEmail">email</label>
							<Field
								name="email"
								type="email"
								id="loginEmail"
								component={Input}
							/>
						</div>
					</form>
				</div>
				<div className="auth__footer"></div>
			</div>
		</article>
	)
}

const EnterRedux = reduxForm({ form: 'login', onSubmitSuccess: afterSubmit })(Enter)

export default EnterRedux