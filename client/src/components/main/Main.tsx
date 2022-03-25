import { FC } from 'react'
import SuccessAlert from '../alerts/SuccessAlert'
import './Main.scss'

type PropsTypes = {
	authText: string | null
	authStatusCode: number | null
}

const Main: FC<PropsTypes> = ({ authText, authStatusCode, ...props }) => {
	return (
		<main className='main'>Main
			<SuccessAlert authText={authText} authStatusCode={authStatusCode} />
		</main>
	)
}

export default Main