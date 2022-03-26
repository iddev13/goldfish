import React, { FC } from "react";
import { connect } from "react-redux";
import { actionsHeader } from "../../redux/reducers/header-reducer";
import { getBurgerActive } from "../../redux/selectors/header-selector";
import { AppStateType } from "../../redux/store";
import Burger from "./Burger";

type PropsType = {
	burgerActive: boolean,
	toggleBurger: any
}

const BurgerClassContainer: FC<PropsType> = ({ burgerActive, toggleBurger }) => {

	const burgerFunc = () => {
		let burger: any = document.querySelector('.burger');
		let body: any = document.querySelector('body');
		let headerList: any = document.querySelector('.burger-toggle');

		burger.classList.toggle('active');
		headerList.classList.toggle('active');
		body.classList.toggle('lock');

		body.classList.contains('lock')
			? body.classList.add('body-fixed')
			: body.classList.remove('body-fixed')
		toggleBurger(true);
	}

	return (
		<Burger
			burgerFunc={burgerFunc}
		/>
	)
}

let mapStateToProps = (state: AppStateType) => {
	return {
		burgerActive: getBurgerActive(state)
	}
}

const BurgerContainer = connect(mapStateToProps, {
	toggleBurger: actionsHeader.toggleBurgerActive
})(BurgerClassContainer);

export default BurgerContainer;
