import { Alert } from "@mui/material"
import { FC } from "react"
import './Alerts.scss'

const ErrorAlert: FC = () => {
	return (
		<div className="alert">
			<Alert variant="filled" severity="error">
				This is an error alert — check it out!
			</Alert>
		</div>
	)
}

export default ErrorAlert