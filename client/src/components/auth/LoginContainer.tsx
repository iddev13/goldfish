import { FC, useEffect } from "react"
import { connect } from "react-redux"
import { actionsAuth } from "../../redux/reducers/auth-reducer"
import { getAuthAuthText, getAuthIsAuthenticated, getAuthToken } from "../../redux/selectors/auth-selector"
import { LoginTC } from '../../redux/reducers/auth-reducer'
import { AppStateType } from "../../redux/store"
import EnterRedux from "./Enter"
import { login, registration } from "../../api/userApi"

const LoginContainerRedux: FC<any> = ({ isAuthenticated, loginAC, LoginTC,
	token, ...props }) => {


	useEffect(() => {
		console.log(isAuthenticated);


	}, [])

	const formData = async (formData: any) => {
		console.log('LogiFormData', formData);

		try {
			LoginTC(formData)
		} catch (error: any) {
			alert(error.response.data.message)
		}
	}

	return (
		<EnterRedux {...props} onSubmit={formData} token={token} />
	)
}

let mapStateToProps = (state: AppStateType) => {
	return {
		isAuthenticated: getAuthIsAuthenticated(state),
		authText: getAuthAuthText(state),
		token: getAuthToken(state)
	}
}

const LoginContainer = connect(mapStateToProps, {
	loginAC: actionsAuth.loginAC,
	cleanLoginMessage: actionsAuth.cleanLoginMessage,
	LoginTC
})(LoginContainerRedux)

export default LoginContainer