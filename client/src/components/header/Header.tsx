import { FC } from 'react'
import Search from '../search/Search'
import CartIcon from '../sprite/CartIcon'
import PhoneIcon from '../sprite/PhoneIcon'
import UserIcon from '../sprite/UserIcon'
import './Header.scss'
import Logo from './Logo'

const Header: FC = () => {
	return (
		<header className='header'>
			<div className="header__top top-header">
				<div className="container">
					<div className="top-header__inner">
						<Logo />
						<Search />
						<div className="top-header__contact">
							<a href="tel:++7(495)9111011">
								<span className="top-header__contactIcon">
									<PhoneIcon />
								</span>
								<span className="top-header__contactNumber">+7 (495) 911-10-11</span>
							</a>
						</div>
						<div className="top-header__actions">
							<div className="top-header__user">
								<a href="#"><UserIcon /></a>
							</div>
							<div className="top-header__cart">
								<a href="#"><CartIcon /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header__body">
				<div className="container">

				</div>
			</div>
		</header>
	)
}

export default Header