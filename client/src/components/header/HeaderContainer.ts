import { getHeaderLinks } from './../../redux/selectors/header-selector';
import { AppStateType } from './../../redux/store';
import { connect } from 'react-redux';
import Header from './Header';
import { HeaderNavType } from '../../redux/reducers/header-reducer';

window.onscroll = function showHeader() {
	var header: any = document.querySelector(".header");

	if (window.pageYOffset > 50) {
		header.classList.add("header__fixed");
	} else {
		header.classList.remove("header__fixed");
	}
};

type MapStateToProps = {
	links: Array<HeaderNavType>
}

type MapDispatchToProps = {}
type OwnProps = {}

type PropsType = MapStateToProps & MapDispatchToProps & OwnProps

let mapStateToProps = (state: AppStateType): PropsType => {
	return {
		links: getHeaderLinks(state)
	}
}

export const HeaderContainer = connect(mapStateToProps, {})(Header)