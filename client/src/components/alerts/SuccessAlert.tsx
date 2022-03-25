import { Alert } from "@mui/material"
import { FC } from "react"
import './Alerts.scss'

type PropsTypes = {
	authText: string | null
	authStatusCode: any
}

const SuccessAlert: FC<PropsTypes> = ({ authText, authStatusCode, ...props }) => {

	return (
		<div className="alert">
			{
				authStatusCode >= 500
					? <Alert variant="filled" severity="error">{authText}</Alert>
					: <Alert variant="filled" severity="success">{authText}</Alert>
			}


		</div>
	)
}

export default SuccessAlert