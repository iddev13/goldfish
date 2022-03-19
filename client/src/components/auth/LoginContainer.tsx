import { FC } from "react"
import { connect } from "react-redux"
import { actionsAuth } from "../../redux/reducers/auth-reducer"
import { getAuthAuthText, getAuthIsAuthenticated } from "../../redux/selectors/auth-selector"
import { LoginTC } from '../../redux/reducers/auth-reducer'
import { AppStateType } from "../../redux/store"
import EnterRedux from "./Enter"

const LoginContainerRedux: FC<any> = ({ isAuthenticated, LoginTC, ...props }) => {

	const formData = (formData: any) => {
		console.log('LogiFormData', formData);
		LoginTC(formData)
	}

	return (
		<EnterRedux {...props} onSubmit={formData} />
	)
}

let mapStateToProps = (state: AppStateType) => {
	isAuthenticated: getAuthIsAuthenticated(state)
	authText: getAuthAuthText(state)
}

const LoginContainer = connect(mapStateToProps, {
	cleanLoginMessage: actionsAuth.cleanLoginMessage,
	LoginTC
})(LoginContainerRedux)

export default LoginContainer