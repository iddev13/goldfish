import { AppStateType } from './../store';

export const getHeaderLinks = (state: AppStateType) => {
	return state.header.links
}

export const getUserLinks = (state: AppStateType) => {
	return state.header.userLinks
}

export const getBurgerActive = (state: AppStateType) => {
	return state.header.burgerActive
}