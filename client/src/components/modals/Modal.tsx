import { FC } from "react";
import { makeStyles } from '@material-ui/styles';
import CloseBtn from "./CloseBtn";

type PropsType = {
	modalActive: boolean,
	setModalActive: (v: boolean) => void,
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
		position: 'absolute',
	},
	body: {
		position: 'relative',
	}
}));

const Modal: FC<PropsType> = ({ modalActive, setModalActive, children }) => {
	const classes = useStyles()

	const closeModal = () => {
		setModalActive(false)
	}
	return (
		<div className={modalActive ? classes.enable : classes.disable}>
			<div className={classes.body}>{children}</div>
			<CloseBtn closeModal={closeModal} />
		</div>
	)
}

export default Modal