import { Alert } from "@mui/material"
import { FC } from "react"
import './Alerts.scss'

type PropsTypes = {
	authText: string | null
	authStatusCode: any
}

const SuccessAlert: FC<PropsTypes> = ({ authText, authStatusCode, ...props }) => {

	const content = authStatusCode >= 400
		? <Alert variant="filled" severity="error">{authText}</Alert>
		: <Alert variant="filled" severity="success">{authText}</Alert>

	return (
		<div className="alert">
			{authText ? content : ''}
		</div>
	)
}

export default SuccessAlert