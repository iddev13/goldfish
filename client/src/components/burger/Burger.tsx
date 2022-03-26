import { FC } from "react";
import './Burger.scss'

type PropsType = {
	burgerFunc: () => void
}

const Burger: React.FC<PropsType> = ({ burgerFunc }) => {
	return (
		<div onClick={burgerFunc} className="burger">
			<span className="burger-top"></span>
			<span className="burger-center"></span>
			<span className="burger-bottom"></span>
		</div>
	)
}

export default Burger