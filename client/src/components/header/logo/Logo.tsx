import { makeStyles } from '@material-ui/styles';
import { FC } from "react";
import image from '../../../image/logo.png'

const useStyles = makeStyles((theme?: any) => ({
	root: {
		marginRight: 33,
		width: 157,
		height: 37,
		'@media (max-width: 550px)': {
			width: 107,
			height: 30,
		},
	},
	logoLink: {
		display: 'inline-block',
		width: '100%',
		height: '100%',
		position: 'relative',

		'& img': {
			display: ' block',
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 1,
			objectFit: 'contain',
			fontFamily: 'object-fit: contain;',
		}
	},
}));

const Logo: FC = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<a href='#' className={classes.logoLink}>
				<img src={image} alt="Goldfish" />
			</a>
		</div>
	)
}

export default Logo