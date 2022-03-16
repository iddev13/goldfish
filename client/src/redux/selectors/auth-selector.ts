import { AppStateType } from "../store";

export const getAuthToken = (state: AppStateType) => {
	return state.auth.token
}