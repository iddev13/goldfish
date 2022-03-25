

export const generateAuthStatusCode = (incomingMessage: any) => {
	console.log('incomingMessage', incomingMessage);

	let compare = incomingMessage === 'Пользователь не найден' || incomingMessage === 'Указан неверный пароль' || 'Пользователь с таким email уже существует' || 'Некорректный email или password'

	if (compare) return 500
	return 200
}