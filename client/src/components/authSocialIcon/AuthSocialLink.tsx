import { FC } from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme?: any) => ({
	root: {
		display: 'inline-block',
		width: 46,
		height: 46,
		position: 'relative',
		border: '2px solid #D9D9D9',
		borderRadius: '50%',
		'& svg': {
			width: '50%',
			height: '50%',
			position: 'absolute',
			top: '50%',
			left: '50%',
			zIndex: 1,
			transform: 'translate(-50%, -50%)'
		}
	}
}));

const AuthSocialLink: FC = ({ children }) => {
	const classes = useStyles()
	return (
		<a href="#" className={classes.root}>{children}</a>
	)
}

export default AuthSocialLink