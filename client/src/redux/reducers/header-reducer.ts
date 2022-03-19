import { InferActionsTypes } from './../store';

type HeaderNavType = {
	id: number
	name: string
}

type InitialStateType = {
	links: Array<HeaderNavType>
}

let initialState: InitialStateType = {
	links: [
		{ id: 1, name: 'Wharhammer' },
		{ id: 2, name: 'Magic:the Cathering' },
		{ id: 3, name: 'Мероприятия' },
		{ id: 4, name: 'О центре' },
		{ id: 5, name: 'Контакты' },
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