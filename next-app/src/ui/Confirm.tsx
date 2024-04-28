import { type FC } from 'react'
import Button from './Button'
import Modal from './Modal'
interface IConfirmProps {
	title: string
	confirmFunction: (params?: any) => void
	onClose: () => void
	isOpen: boolean
}
const Confirm: FC<IConfirmProps> = ({
	title,
	confirmFunction,
	onClose,
	isOpen,
}) => {
	return (
		isOpen && (
			<Modal onClose={onClose}>
				<div className='w-64'>
					<div className='text-center text-lg mb-5'>{title}</div>
					<div className='flex gap-4 justify-center'>
						<Button onClick={confirmFunction}>Так</Button>
						<Button variant='outlined' onClick={onClose}>
							Ні
						</Button>
					</div>
				</div>
			</Modal>
		)
	)
}

export default Confirm
