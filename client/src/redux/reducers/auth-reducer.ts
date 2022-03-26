import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from './../store';
import { login } from '../../api/userApi';
import { generateAuthStatusCode } from './../../helpers/generateAuthStatusCode';

const LOGIN = 'goldfish/auth/LOGIN';
const LOGOUT = 'goldfish/auth/LOGOUT';
const LOGIN_MESSAGE = 'goldfish/auth/LOGIN_MESSAGE';
const CLEAR_LOGIN_MESSAGE = 'goldfish/auth/CLEAR_LOGIN_MESSAGE';
const INFO_MESSAGE_AUTH = 'goldfish/auth/INFO_MESSAGE_AUTH';
const CLEAR_AUTH_INFO = 'goldfish/auth/CLEAR_AUTH_INFO ';
const TOOGLE_IS_LOGIN = 'goldfish/auth/TOOGLE_IS_LOGIN ';

const tokenTime: string = 'tokenTime'
export const storageName: string = 'userData'

const setLoginTimeValue = (): void => {
	const date = Math.floor(Date.now() / 1000).toString() // Seconds
	localStorage.setItem('tokenTime', date)
}

let tokenTimeValue: number = Number(localStorage.getItem(tokenTime))

if (tokenTimeValue + 3600 < Math.floor(Date.now() / 1000)) {
	localStorage.removeItem(storageName)
	localStorage.removeItem(tokenTime)
}

export const getStorageToken = () => {
	const data = JSON.parse(localStorage.getItem(storageName) || '{}')
	if (data && data.token && data.token !== '') {
		return data.token
	}
}

type InitialStateType = {
	token: boolean | null,
	userId: number | null,
	isAuthenticated: any,
	authText: string | null,
	authStatus: number,
	islogin: boolean
}

let initialState: InitialStateType = {
	token: null,
	userId: null,
	isAuthenticated: getStorageToken() || false,
	authText: '',
	authStatus: 0,
	islogin: false,
}

type ActionsType = InferActionsTypes<typeof actionsAuth>

const authReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case LOGIN:
			const data = JSON.parse(localStorage.getItem(storageName) || '{}')
			return {
				...state,
				token: data.token,
				userId: data.userId,
				isAuthenticated: !!data.token,
			}
		case LOGOUT:
			return { ...state, isAuthenticated: false }
		case INFO_MESSAGE_AUTH:
			console.log('action.text', action.text);
			const newStatus = generateAuthStatusCode(action.text)
			return {
				...state,
				authText: action.text,
				authStatus: newStatus
			}
		case CLEAR_AUTH_INFO:
			return {
				...state,
				authText: '',
				authStatus: 0
			}
		case TOOGLE_IS_LOGIN:
			return { ...state, islogin: action.value }

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
	loginAC: (data: any) => {
		setLoginTimeValue()
		document.location.reload()
		return { type: LOGIN } as const
	},
	logOutAC: () => {
		localStorage.removeItem(storageName)
		localStorage.removeItem(tokenTime)
		return { type: LOGOUT } as const
	},
	infoMessageAuth: (text: string | null) => {
		return { type: INFO_MESSAGE_AUTH, text } as const
	},
	clearAuthInfo: () => {
		return { type: CLEAR_AUTH_INFO } as const
	},
	toggleIsLogin: (value: boolean) => {
		return { type: TOOGLE_IS_LOGIN, value } as const
	}
}

export const LoginTC = (formData: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
	return async (dispatch) => {
		try {
			let data = await login(formData.email, formData.password)
			dispatch(actionsAuth.loginAC(data))
			console.log('data', data);
		} catch (error: any) {
			console.log("Error authReducer", error.response.data.message);
			dispatch(actionsAuth.infoMessageAuth(error.response.data.message))
			setTimeout(() => { dispatch(actionsAuth.clearAuthInfo()) }, 5000);
		}
	}
}

export default authReducer;