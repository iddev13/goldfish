import { AppStateType } from './../store';

export const getHeaderLinks = (state: AppStateType) => {
	return state.header.links
}