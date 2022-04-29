import { InferActionsTypes } from '../store';


export type ProductsType = {
	id: number
	name: string
	url: string
	product: Array<any>
}

type InitialStateType = {
	products: Array<ProductsType>
}

let initialState = {
	products: [
		{
			id: 1,
			name: 'Настольные игры',
			product: [
				{ id: 1, productName: 'Альтернативные миниатюры', url: 'productUrl', amount: 69 },
				{ id: 2, productName: 'Warhammer 40k', url: 'productUrl', amount: 400 },
				{ id: 3, productName: 'Age of Sigmar', url: 'productUrl', amount: 263 },
				{ id: 4, productName: 'Warcry', url: 'productUrl', amount: 49 },
				{ id: 5, productName: 'Nercomunda', url: 'productUrl', amount: 21 },
				{ id: 6, productName: 'Lord of the Rings', url: 'productUrl', amount: 16 },
				{ id: 7, productName: 'Blood Bowl', url: 'productUrl', amount: 28 },
				{ id: 8, productName: 'Titanicus', url: 'productUrl', amount: 4 },
				{ id: 9, productName: 'Warcry', url: 'productUrl', amount: 49 },
				{ id: 10, productName: 'Warhammer: Underworlds', url: 'productUrl', amount: 22 },
				{ id: 11, productName: 'Killtem', url: 'productUrl', amount: 4 },
			]

		},
		{
			id: 2,
			name: 'Warhammer 40000',
			product: [
				{ is: 1, productName: 'Альтернативные миниатюры 2', url: 'productUrl', amount: 69 },
				{ is: 2, productName: 'Warhammer 40k 2', url: 'productUrl', amount: 400 },
				{ is: 3, productName: 'Age of Sigmar 2', url: 'productUrl', amount: 263 },
				{ is: 4, productName: 'Warcry 2', url: 'productUrl', amount: 49 },
				{ is: 5, productName: 'Nercomunda 2', url: 'productUrl', amount: 21 },
				{ is: 6, productName: 'Lord of the Rings 2', url: 'productUrl', amount: 16 },
				{ is: 7, productName: 'Blood Bowl 2', url: 'productUrl', amount: 28 },
				{ is: 8, productName: 'Titanicus 2', url: 'productUrl', amount: 4 },
				{ is: 9, productName: 'Warcry 2', url: 'productUrl', amount: 49 },
				{ is: 10, productName: 'Warhammer: Underworlds 2', url: 'productUrl', amount: 22 },
				{ is: 11, productName: 'Killtem 2', url: 'productUrl', amount: 4 },
			]

		},
		{
			id: 3,
			name: 'Magic: the Gathering',
			product: [
				{ id: 1, productName: 'Альтернативные миниатюры 3', url: 'productUrl', amount: 69 },
				{ id: 2, productName: 'Warhammer 40k 3', url: 'productUrl', amount: 400 },
				{ id: 3, productName: 'Age of Sigmar 3', url: 'productUrl', amount: 263 },
				{ id: 4, productName: 'Warcry 3', url: 'productUrl', amount: 49 },
				{ id: 5, productName: 'Nercomunda 3', url: 'productUrl', amount: 21 },
				{ id: 6, productName: 'Lord of the Rings 3', url: 'productUrl', amount: 16 },
				{ id: 7, productName: 'Blood Bowl 3', url: 'productUrl', amount: 28 },
				{ id: 8, productName: 'Titanicus 3', url: 'productUrl', amount: 4 },
				{ id: 9, productName: 'Warcry 3', url: 'productUrl', amount: 49 },
				{ id: 10, productName: 'Warhammer: Underworlds 3', url: 'productUrl', amount: 22 },
				{ id: 11, productName: 'Killtem 3', url: 'productUrl', amount: 4 },
			]

		},
		{
			id: 4,
			name: 'Аксессуары для игр',
			product: [
				{ id: 1, productName: 'Альтернативные миниатюры 4', url: 'productUrl', amount: 69 },
				{ id: 2, productName: 'Warhammer 40k 4', url: 'productUrl', amount: 400 },
				{ id: 3, productName: 'Age of Sigmar 4', url: 'productUrl', amount: 263 },
				{ id: 4, productName: 'Warcry 4', url: 'productUrl', amount: 49 },
				{ id: 5, productName: 'Nercomunda 4', url: 'productUrl', amount: 21 },
				{ id: 6, productName: 'Lord of the Rings 4', url: 'productUrl', amount: 16 },
				{ id: 7, productName: 'Blood Bowl 4', url: 'productUrl', amount: 28 },
				{ id: 8, productName: 'Titanicus 4', url: 'productUrl', amount: 4 },
				{ id: 9, productName: 'Warcry 4', url: 'productUrl', amount: 49 },
				{ id: 10, productName: 'Warhammer 4: Underworlds', url: 'productUrl', amount: 22 },
				{ id: 11, productName: 'Killtem 4', url: 'productUrl', amount: 4 },
			]

		},
		{
			id: 5,
			name: 'Краски',
			product: [
				{ id: 1, productName: 'Альтернативные миниатюры 5', url: 'productUrl', amount: 69 },
				{ id: 2, productName: 'Warhammer 40k 5', url: 'productUrl', amount: 400 },
				{ id: 3, productName: 'Age of Sigmar 5', url: 'productUrl', amount: 263 },
				{ id: 4, productName: 'Warcry 5', url: 'productUrl', amount: 49 },
				{ id: 5, productName: 'Nercomunda 5', url: 'productUrl', amount: 21 },
				{ id: 6, productName: 'Lord of the Rings 5', url: 'productUrl', amount: 16 },
				{ id: 7, productName: 'Blood Bowl 5', url: 'productUrl', amount: 28 },
				{ id: 8, productName: 'Titanicus 5', url: 'productUrl', amount: 4 },
				{ id: 9, productName: 'Warcry 5', url: 'productUrl', amount: 49 },
				{ id: 10, productName: 'Warhammer: Underworlds 5', url: 'productUrl', amount: 22 },
				{ id: 11, productName: 'Killtem 5', url: 'productUrl', amount: 4 },
			]

		},
		{
			id: 6,
			name: 'Товары для детей',
			product: [
				{ id: 1, productName: 'Альтернативные миниатюры 6', url: 'productUrl', amount: 69 },
				{ id: 2, productName: 'Warhammer 40k 6', url: 'productUrl', amount: 400 },
				{ id: 3, productName: 'Age of Sigmar 6', url: 'productUrl', amount: 263 },
				{ id: 4, productName: 'Warcry 6', url: 'productUrl', amount: 49 },
				{ id: 5, productName: 'Nercomunda 6', url: 'productUrl', amount: 21 },
				{ id: 6, productName: 'Lord of the Rings 6', url: 'productUrl', amount: 16 },
				{ id: 7, productName: 'Blood Bowl 6', url: 'productUrl', amount: 28 },
				{ id: 8, productName: 'Titanicus 6', url: 'productUrl', amount: 4 },
				{ id: 9, productName: 'Warcry 6', url: 'productUrl', amount: 49 },
				{ id: 10, productName: 'Warhammer: Underworlds 6', url: 'productUrl', amount: 22 },
				{ id: 11, productName: 'Killtem 6', url: 'productUrl', amount: 4 },
			]

		},
		{
			id: 7,
			name: 'Аксессуары для моделизма',
			product: [
				{ id: 1, productName: 'Альтернативные миниатюры 7', url: 'productUrl', amount: 69 },
				{ id: 2, productName: 'Warhammer 40k 7', url: 'productUrl', amount: 400 },
				{ id: 3, productName: 'Age of Sigmar 7', url: 'productUrl', amount: 263 },
				{ id: 4, productName: 'Warcry 7', url: 'productUrl', amount: 49 },
				{ id: 5, productName: 'Nercomunda 7', url: 'productUrl', amount: 21 },
				{ id: 6, productName: 'Lord of the Rings 7', url: 'productUrl', amount: 16 },
				{ id: 7, productName: 'Blood Bowl 7', url: 'productUrl', amount: 28 },
				{ id: 8, productName: 'Titanicus 7', url: 'productUrl', amount: 4 },
				{ id: 9, productName: 'Warcry 7', url: 'productUrl', amount: 49 },
				{ id: 10, productName: 'Warhammer: Underworlds 7', url: 'productUrl', amount: 22 },
				{ id: 11, productName: 'Killtem 7', url: 'productUrl', amount: 4 },
			]

		},
	]
}

type ActionsType = InferActionsTypes<typeof actionsProducts>

const productsReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {

		default: return state
	}
}

export const actionsProducts = {

}

export default productsReducer