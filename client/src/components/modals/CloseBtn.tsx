import { FC } from "react"
import { makeStyles } from '@material-ui/styles';
import CloseIcon from "../sprite/CloseIcon";

const useStyles = makeStyles((theme?: any) => ({
	close: {
		display: 'inline-block',
		width: 20,
		height: 20,
		position: 'absolute',
		top: 15,
		right: 15,
		zIndex: 1,
		cursor: 'pointer',
		transition: 'transform 0.3s ease',
		transformOrigin: 'center',
		'&:hover': {
			transform: 'rotate(90deg)'
		},
		'& svg': {
			width: 20,
			height: 20,
			fill: '#2a2a2a'
		}
	}
}));

type PropsTypes = {
	closeModal: () => void
}

const CloseBtn: FC<PropsTypes> = ({ closeModal }) => {
	const classes = useStyles()
	return (
		<span
			className={classes.close}
			onClick={closeModal}>
			<CloseIcon />
		</span>
	)
}

export default CloseBtn