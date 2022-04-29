import { AppStateType } from "../store"

export const getProductsList = (state: AppStateType) => {
	return state.products.products
}