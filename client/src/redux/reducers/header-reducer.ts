import { InferActionsTypes } from './../store';

export type HeaderNavType = {
	id: number
	name: string
	path: string
}

type InitialStateType = {
	links: Array<HeaderNavType>
}

let initialState: InitialStateType = {
	links: [
		{ id: 1, name: 'Wharhammer', path: '#' },
		{ id: 2, name: 'Magic:the Cathering', path: '#' },
		{ id: 3, name: 'Мероприятия', path: '#' },
		{ id: 4, name: 'О центре', path: '#' },
		{ id: 5, name: 'Контакты', path: '#' },
	]
}

type ActionsType = InferActionsTypes<typeof actionsHeader>

const headerReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		default: return state
	}
}

const actionsHeader = {

}

export default headerReducer