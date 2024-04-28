import { type FC } from 'react'
import ContactItem from './ContactItem'
interface IContactsProps {
	username?: string
	phoneNumber?: string
	email?: string
}
const Contacts: FC<IContactsProps> = ({ email, phoneNumber, username }) => {
	return (
		<div className='w-96'>
			<div className='text-center text-xl mb-5'>Контактні дані</div>
			<ContactItem label={"Ім'я та прізвище"} data={username} />
			<ContactItem label={'Номер телефону'} data={phoneNumber} />
			<ContactItem label={'Email'} data={email} />
		</div>
	)
}

export default Contacts
