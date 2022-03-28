import { FC } from "react";
import Facebook from "../../sprite/Facebook";
import Instagram from "../../sprite/Instagram";
import Vk from "../../sprite/Vk";
import Catalog from "../header-catalog/Calalog";
import './Nav.scss'

const Navigation: FC<any> = ({ links }) => {

	return (
		<nav className="header__nav nav">
			<Catalog />
			<ul className="nav__list burger-toggle">
				{links.map((elem: any) => {
					return <li className="nav__item" key={elem.id}>
						<a href={elem.path} className="nav__link">
							{elem.name}
						</a></li>
				})}
			</ul>
			<ul className="nav__socialList">
				<li className="nav__socialItem"><a href="#"><Instagram /></a></li>
				<li className="nav__socialItem"><a href="#"><Vk /></a></li>
				<li className="nav__socialItem"><a href="#"><Facebook /></a></li>
			</ul>
		</nav>
	)
}

export default Navigation