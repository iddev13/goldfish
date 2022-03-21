import { getProducts } from './../../api/api';
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from './../store';

const LOGIN = 'goldfish/auth/LOGIN';
const LOGOUT = 'goldfish/auth/LOGOUT';
const LOGIN_MESSAGE = 'goldfish/auth/LOGIN_MESSAGE';
const CLEAR_LOGIN_MESSAGE = 'goldfish/auth/CLEAR_LOGIN_MESSAGE';

type InitialStateType = {
	token: boolean | null,
	userId: number | null,
	isAuthenticated: any,
	authText: string | null
}

let initialState: InitialStateType = {
	token: null,
	userId: null,
	isAuthenticated: true,
	authText: ''
}

type ActionsType = InferActionsTypes<typeof actionsAuth>

const authReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case LOGOUT:
			return { ...state, isAuthenticated: false }

		default: return state
	}
}

export const actionsAuth = {
	changeAuthLoginText: (text: string) => {
		return { type: LOGIN_MESSAGE, text } as const
	},
	cleanLoginMessage: () => {
		return { type: CLEAR_LOGIN_MESSAGE } as const
	},
	logOut: () => {
		return { type: LOGOUT } as const
	}
}

export const LoginTC = (formData: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
	return async (dispatch) => {
		try {
			console.log('LoginTC', formData);
			let data = await getProducts()
			console.log('data', data);
		} catch (error) {
			console.log("Error", error);

		}
	}
}


export default authReducer;