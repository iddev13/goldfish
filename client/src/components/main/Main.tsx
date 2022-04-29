import { FC } from 'react'
import SuccessAlert from '../alerts/SuccessAlert'
import './Main.scss'
import AuthModal from '../modals/AuthModal'

type PropsTypes = {
	authText: string | null
	authStatusCode: number | null
}

const Main: FC<PropsTypes> = ({ authText, authStatusCode, ...props }) => {
	return (
		<main className='main'>Main
			<SuccessAlert authText={authText} authStatusCode={authStatusCode} />
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa laudantium, praesentium saepe dignissimos ducimus excepturi cupiditate laboriosam veritatis ratione vero, adipisci voluptatem quisquam voluptatibus soluta ipsum, et molestiae animi amet ipsa possimus accusantium libero! Sed, nisi inventore eum error itaque deserunt numquam sunt fugit commodi amet illo dolores ut ex veritatis odio quidem sint, praesentium totam, reprehenderit rem. Enim atque tenetur obcaecati ipsa sed quis. Ipsa, minus fugit! Officiis similique quod neque id quidem assumenda unde! Iste, veniam quam dolorum ducimus fugiat ipsum necessitatibus consequatur. Quisquam a repellendus corporis laborum porro, ullam, modi sed hic quae aut aliquam cupiditate dolore!
			<AuthModal />
		</main>
	)
}

export default Main