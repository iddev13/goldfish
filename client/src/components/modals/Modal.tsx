import { FC } from "react";
import { makeStyles } from '@material-ui/styles';
import CloseBtn from "./CloseBtn";

type PropsType = {
	modalActive?: boolean,
	setModalActive?: any,
	children: any
}

const useStyles = makeStyles((theme?: any) => ({
	enable: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100vh',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 100,
		background: '#2a2a2a93',
		padding: 10,
		transition: 'opacity 0.3s ease, visibility 0.3s ease'
	},
	disable: {
		visibility: 'hidden',
		opacity: 0,
		position: 'fixed',
		top: 0,
		left: '100%'
	},
	body: {
		position: 'relative',
	}
}));

const Modal: FC<PropsType> = ({ modalActive, setModalActive, children }) => {


	const classes = useStyles()

	let modals = document.querySelectorAll('.modal')
	console.log(modals);

	const body = document.querySelector('body')
	body?.addEventListener('click', (event: any) => {
		if (!event.target.closest('modal')) {
			// setModalActive(false)
		}
	})

	// modals.forEach((elem: any) => {

	// 	elem.addEventListener("click", function (event: any) {
	// 		if (!event.target.closest('.popup__content')) {
	// 			elem(event.target.closest('.popup'));
	// 		}
	// 	})
	// })

	const closeModal = () => {
		// setModalActive(false)
	}
	return (
		<div className={`modal ${modalActive ? classes.enable : classes.disable}`}>
			<div className={classes.body}>{children}</div>
			<CloseBtn closeModal={closeModal} />
		</div>
	)
}

export default Modal