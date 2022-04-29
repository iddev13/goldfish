import { FC, useState } from 'react'
import { useWindowSize } from '../../hook/useWindowSize'
import AuthContainer from '../auth/AuthContainer'
import Nav from './nav/Nav'
import Search from '../search/Search'
import CartIcon from '../sprite/CartIcon'
import PhoneIcon from '../sprite/PhoneIcon'
import './Header.scss'
import Logo from './logo/Logo'
import AccountMenu from '../accountMenu/AccountMenu'
import { HeaderContainerPropsType } from './HeaderContainer'
import AuthModal from '../modals/AuthModal'
import BurgerContainer from '../burger/BurgerContainer'

const Header: FC<HeaderContainerPropsType> = ({ userLinks, links, IsAuthenticated, logOutAC }) => {

	const size: any = useWindowSize()
	const [modalActive, setModalActive] = useState<boolean>(false);

	return (
		<header className='header'>
			<div className="header__top top-header">
				<div className="container">
					<div className="top-header__inner">
						<BurgerContainer />
						<div className="top-header__logo">
							<Logo />
						</div>
						<div className="top-header__search">
							{size.width > 768 ? <Search /> : null}
						</div>
						<div className="top-header__contact">
							<a href="tel:+7(495)9111011">
								<span className="top-header__contactIcon">
									<PhoneIcon />
								</span>
								<span className="top-header__contactNumber">+7 (495) 911-10-11</span>
							</a>
						</div>
						<div className="top-header__actions">
							<div className="top-header__user">
								{
									IsAuthenticated
										? <AccountMenu
											logOutAC={logOutAC} />
										: <AuthModal />
								}
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
					<div className="header__bodyInner">
						<Nav links={links} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header