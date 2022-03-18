import { FC } from "react"
import SearchIcon from "../sprite/SearchIcon"
import './Search.scss'

const Search: FC = () => {
	return (
		<div className="search">
			<form action="/">
				<div className="seach__block">
					<input className="search__input" type="text" placeholder="Найти игру" />
				</div>
				<button className="search__btn"><SearchIcon /></button>
			</form>
		</div>
	)
}

export default Search