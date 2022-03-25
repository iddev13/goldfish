import { Alert } from "@mui/material"
import { FC } from "react"
import './Alerts.scss'

const InfoAlert: FC = () => {
	return (
		<div className="alert">
			<Alert variant="filled" severity="info">
				This is an info alert — check it out!
			</Alert>
		</div>
	)
}

export default InfoAlert