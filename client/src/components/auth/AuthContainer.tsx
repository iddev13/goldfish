import { FC, useEffect, useState } from "react"
import { connect } from "react-redux"
import { actionsAuth } from "../../redux/reducers/auth-reducer"
import { getAuthAuthText, getAuthIsAuthenticated, getAuthIsLogin, getAuthToken } from "../../redux/selectors/auth-selector"
import { LoginTC } from '../../redux/reducers/auth-reducer'
import { AppStateType } from "../../redux/store"
import LoginRedux from "./Login"
import RegistrationRedux from "./Registration"
// import { Redirect } from "react-router-dom"

const LoginContainerRedux: FC<any> = ({ isAuthenticated, loginAC, LoginTC, isLogin, setIsLogin, ...props }) => {
	const formData = async (formData: any) => {
		console.log('LogiFormData', formData);
		try {
			LoginTC(formData)
		} catch (error: any) {
			alert(error.response.data.message)
		}
	}

	const loginComponent = <LoginRedux  {...props}
		onSubmit={formData}
		setIsLogin={setIsLogin}
	/>
	const registrationComponent = <RegistrationRedux {...props}
		onSubmit={formData}
		setIsLogin={setIsLogin}
	/>

	return (
		<>
		sd
			{loginComponent}
			{/* {isLogin ? loginComponent : registrationComponent} */}
		</>
	)
}

let mapStateToProps = (state: AppStateType) => {
	return {
		isAuthenticated: getAuthIsAuthenticated(state),
		authText: getAuthAuthText(state),
		isLogin: getAuthIsLogin(state)
	}
}

const LoginContainer = connect(mapStateToProps, {
	loginAC: actionsAuth.loginAC,
	cleanLoginMessage: actionsAuth.cleanLoginMessage,
	LoginTC,
	setIsLogin: actionsAuth.toggleIsLogin
})(LoginContainerRedux)

export default LoginContainer