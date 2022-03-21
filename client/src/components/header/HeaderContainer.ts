import { actionsAuth } from './../../redux/reducers/auth-reducer';
import { getHeaderLinks, getUserLinks } from './../../redux/selectors/header-selector';
import { AppStateType } from './../../redux/store';
import { connect } from 'react-redux';
import Header from './Header';
import { HeaderNavType } from '../../redux/reducers/header-reducer';
import { getAuthIsAuthenticated } from '../../redux/selectors/auth-selector';

window.onscroll = function showHeader() {
	var header: any = document.querySelector(".header");

	if (window.pageYOffset > 50) {
		header.classList.add("header__fixed");
	} else {
		header.classList.remove("header__fixed");
	}
};

type MapStateToProps = {
	userLinks: Array<HeaderNavType>
	links: Array<HeaderNavType>
	IsAuthenticated: boolean
}

type MapDispatchToProps = {
	logOut: () => void
}
type OwnProps = {}

export type HeaderContainerPropsType = MapStateToProps & MapDispatchToProps & OwnProps

let mapStateToProps = (state: AppStateType) => {
	return {
		userLinks: getUserLinks(state),
		links: getHeaderLinks(state),
		IsAuthenticated: getAuthIsAuthenticated(state)
	}
}

let mapDispatchToProps: MapDispatchToProps = {
	logOut: actionsAuth.logOut
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)