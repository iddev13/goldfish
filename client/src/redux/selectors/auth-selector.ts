import { AppStateType } from "../store";

export const getAuthToken = (state: AppStateType) => {
	return state.auth.token
}

export const getAuthIsAuthenticated = (state: AppStateType) => {
	return state.auth.isAuthenticated
}

export const getAuthAuthText = (state: AppStateType) => {
	return state.auth.authText
}

export const getAuthStatusCode = (state: AppStateType) => {
	return state.auth.authStatus
}