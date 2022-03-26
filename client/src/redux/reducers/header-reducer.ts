import { InferActionsTypes } from './../store';

const TOGGLE_BURGER_ACTIVE = 'goldfish/header/TOGGLE_BURGER_ACTIVE'

export type HeaderNavType = {
	id: number
	name: string
	path: string
}

type InitialStateType = {
	userLinks: Array<HeaderNavType>
	links: Array<HeaderNavType>
	burgerActive: boolean
}

let initialState: InitialStateType = {
	userLinks: [
		{ id: 1, name: 'Профиль', path: '#' },
		{ id: 2, name: 'Настройки', path: '#' },
		{ id: 3, name: 'Другое', path: '#' },
	],
	links: [
		{ id: 1, name: 'Wharhammer', path: '#' },
		{ id: 2, name: 'Magic:the Cathering', path: '#' },
		{ id: 3, name: 'Мероприятия', path: '#' },
		{ id: 4, name: 'О центре', path: '#' },
		{ id: 5, name: 'Контакты', path: '#' },
	],
	burgerActive: false
}

type ActionsType = InferActionsTypes<typeof actionsHeader>

const headerReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case TOGGLE_BURGER_ACTIVE:
			return { ...state, burgerActive: action.value }
		default: return state
	}
}

export const actionsHeader = {
	toggleBurgerActive: (value: boolean) => {
		return { type: TOGGLE_BURGER_ACTIVE, value }
	}
}

export default headerReducer