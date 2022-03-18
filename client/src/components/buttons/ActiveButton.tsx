import { FC } from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	btn: {
		width: '100%',
		padding: '12px 0',
		background: 'linear-gradient(184.53deg, #F9A43F 5.27%, #FB791B 91.78%)',
		borderRadius: 9
	}
}))

const ActiveButton: FC = ({ children }) => {
	const classes = useStyles()
	return (<button className={classes.btn}>{children}</button>)
}

export default ActiveButton