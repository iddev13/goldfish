import { FC } from 'react'
import './Sprite.scss'

const SearchIcon: FC = () => {
	return (
		<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" />
		</svg>
	)
}

export default SearchIcon