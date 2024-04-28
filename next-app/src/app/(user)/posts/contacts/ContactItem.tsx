import { type FC } from 'react'
interface IContactItemProps {
	label: string
	data?: string
}
const ContactItem: FC<IContactItemProps> = ({ label, data }) => {
	return (
		<div className='w-full '>
			<div className='my-3'>{label}</div>
			<div className='bg-secondary rounded-lg p-4 text-tertiary w-full'>
				{data}
			</div>
		</div>
	)
}

export default ContactItem
