import { FC, useState } from 'react'
import { useWindowSize } from '../../hook/useWindowSize'
import { HeaderNavType } from '../../redux/reducers/header-reducer'
import LoginContainer from '../auth/AuthContainer'
import Nav from './Nav'
import Modal from '../modals/Modal'
import Search from '../search/Search'
import CartIcon from '../sprite/CartIcon'
import PhoneIcon from '../sprite/PhoneIcon'
import UserIcon from '../sprite/UserIcon'
import './Header.scss'
import Logo from './Logo'
import AccountMenu from '../accountMenu/AccountMenu'
import { HeaderContainerPropsType } from './HeaderContainer'
import BurgerContainer from '../burger/BurgerContainer'

const Header: FC<HeaderContainerPropsType> = ({ userLinks, links, IsAuthenticated, logOutAC }) => {

	const size: any = useWindowSize()
	const [modalActive, setModalActive] = useState<boolean>(false);

	return (
		<header className='header'>
			<div className="header__top top-header">
				<div className="container">
					<div className="top-header__inner">
						<Logo />
						<Search />
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
										: <a href="#"
											onClick={() => setModalActive(true)}><UserIcon /></a>
								}
								<Modal
									modalActive={modalActive}
									setModalActive={setModalActive}>
									<LoginContainer />
								</Modal>
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
						<BurgerContainer />
						<Nav links={links} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header