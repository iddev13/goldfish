import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from './../store';


// const LOGIN = 'goldfish/auth/LOGIN';
// const LOGOUT = 'goldfish/auth/LOGOUT';
// const LOGIN_MESSAGE = 'goldfish/auth/LOGIN_MESSAGE';
// const CLEAR_LOGIN_MESSAGE = 'goldfish/auth/CLEAR_LOGIN_MESSAGE';

type InitialStateType = {
	token: boolean | null
	userId: number | null
}

let initialState: InitialStateType = {
	token: null,
	userId: null
}

type ActionsType = InferActionsTypes<typeof actionsAuth>

const authReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		default: return state
	}
}

export const actionsAuth = {
	// changeAuthLoginText: (text: string) => {
	// 	return { type: LOGIN_MESSAGE, text } as const
	// },
	// cleanLoginMessage: () => {
	// 	return { type: CLEAR_LOGIN_MESSAGE } as const
	// },
}

export default authReducer;