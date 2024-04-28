import { type FC } from 'react'
interface IProfileDataItemProps {
	data?: string
	title: string
}
const ProfileDataItem: FC<IProfileDataItemProps> = ({ data, title }) => {
	return (
		<div>
			<span className='text-tertiary text-sm'>{title}</span>
			<p className={'text-xl'}>{data}</p>
		</div>
	)
}

export default ProfileDataItem
