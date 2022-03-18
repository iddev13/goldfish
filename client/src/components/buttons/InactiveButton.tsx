import { FC } from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	root: {
		background: 'green'
	}
}));

const InactiveButton: FC = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<button>BUTTON</button>
		</div>
	)
}

export default InactiveButton