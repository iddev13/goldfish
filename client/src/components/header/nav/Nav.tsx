import { FC } from "react";
import Facebook from "../../sprite/Facebook";
import Instagram from "../../sprite/Instagram";
import Vk from "../../sprite/Vk";
import { useWindowSize } from '../../../hook/useWindowSize';
import './Nav.scss'
import { CatalogContainer } from "../header-catalog/CatalogContainer";
import Search from "../../search/Search";
// import isMobile from '../../../utils/check-mobile';

const Navigation: FC<any> = ({ links }) => {

	const size: any = useWindowSize()

	return (
		<nav className="header__nav nav">
			{size.width < 768 ? <Search /> : null}
			{size.width > 950 ? <CatalogContainer /> : null}
			<ul className="nav__list burger-toggle">
				{size.width < 950 ? <CatalogContainer /> : null}
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
		</nav >
	)
}

export default Navigation