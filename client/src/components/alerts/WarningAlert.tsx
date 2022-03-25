import { Alert } from "@mui/material"
import { FC } from "react"
import './Alerts.scss'

const WarningAlert: FC = () => {
	return (
		<div className="alert">
			<Alert variant="filled" severity="warning">
				This is a warning alert — check it out!
			</Alert>
		</div>
	)
}

export default WarningAlert