import { FC } from "react"
import './CatalogNav.scss'

const CatalogButton: FC = () => {
	return (
		<>
			<div className="catalog-nav__btn">
				<span className="catalog-nav__btn-top"></span>
				<span className="catalog-nav__btn-center"></span>
				<span className="catalog-nav__btn-bottom"></span>
			</div>
		</>

	)
}

export default CatalogButton