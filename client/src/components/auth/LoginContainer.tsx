import { FC } from "react"
import { connect } from "react-redux"
import { actionsAuth } from "../../redux/reducers/auth-reducer"
import { getAuthAuthText, getAuthIsAuthenticated } from "../../redux/selectors/auth-selector"
import { AppStateType } from "../../redux/store"
import EnterRedux from "./Enter"

const LoginContainerRedux: FC<any> = ({ isAuthenticated, ...props }) => {
	return (
		<EnterRedux {...props} />
	)
}

let mapStateToProps = (state: AppStateType) => {
	isAuthenticated: getAuthIsAuthenticated(state)
	authText: getAuthAuthText(state)
}

const LoginContainer = connect(mapStateToProps, {
	cleanLoginMessage: actionsAuth.cleanLoginMessage
})(LoginContainerRedux)

export default LoginContainer