import { FC } from "react"
import { connect } from "react-redux"
import { actionsAuth } from "../../redux/reducers/auth-reducer"
import { getAuthAuthText, getAuthIsAuthenticated } from "../../redux/selectors/auth-selector"
import { LoginTC } from '../../redux/reducers/auth-reducer'
import { AppStateType } from "../../redux/store"
import EnterRedux from "./Enter"
import { login, registration } from "../../api/userApi"

const LoginContainerRedux: FC<any> = ({ isAuthenticated, LoginTC, ...props }) => {

	// const click = async () => {
	// 	try {
	// 		let data;
	// 		if (isLogin) {
	// 			data = await login(email, password);
	// 		} else {
	// 			data = await registration(email, password);
	// 		}
	// 		user.setUser(user)
	// 		user.setIsAuth(true)
	// 		history.push(SHOP_ROUTE)
	// 	} catch (e) {
	// 		alert(e.response.data.message)
	// 	}

	// }
	const isLogin = false

	const formData = async (formData: any) => {
		console.log('LogiFormData', formData);
		try {
			// LoginTC(formData)
			let data;
			if (isAuthenticated) {
				data = await login(formData.email, formData.password);
				console.log(data);
			} else {
				data = await registration(formData.email, formData.password);
				console.log(data);
			}

		} catch (error:any) {
			alert(error.response.data.message)
		}
	}

	return (
		<EnterRedux {...props} onSubmit={formData} />
	)
}

let mapStateToProps = (state: AppStateType) => {
	return {
		isAuthenticated: getAuthIsAuthenticated(state),
		authText: getAuthAuthText(state)
	}
}

const LoginContainer = connect(mapStateToProps, {
	cleanLoginMessage: actionsAuth.cleanLoginMessage,
	LoginTC
})(LoginContainerRedux)

export default LoginContainer