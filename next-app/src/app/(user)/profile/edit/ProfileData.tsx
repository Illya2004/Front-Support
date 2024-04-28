import { IUser } from '@/interfaces/user.interfaces'
import { type FC } from 'react'
import ProfileDataItem from './ProfileDataItem'
interface IProfileDataProps {
	user?: IUser
}
const ProfileData: FC<IProfileDataProps> = ({ user }) => {
	return (
		<div>
			<ProfileDataItem data={user?.username} title={"Моє ім'я та прізвище"} />
			<ProfileDataItem data={user?.email} title={'Мій email'} />
			<ProfileDataItem data={user?.phone_number} title={'Мій телефон'} />
		</div>
	)
}

export default ProfileData
