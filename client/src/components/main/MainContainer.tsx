import { connect } from "react-redux";
import { getAuthAuthText, getAuthStatusCode } from "../../redux/selectors/auth-selector";
import { AppStateType } from "../../redux/store";
import Main from "./Main";

let mapStateToProps = (state: AppStateType) => {
	return {
		authText: getAuthAuthText(state),
		authStatusCode: getAuthStatusCode(state)
	}
}

const MainContainer = connect(mapStateToProps, {

})(Main)

export default MainContainer