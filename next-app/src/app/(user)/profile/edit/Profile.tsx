'use client'
import { useProfile } from '@/hooks/useProfile'
import Heading from '@/ui/Heading'
import { type FC } from 'react'
import EditProfile from './EditProfile'
import ProfileData from './ProfileData'
const Profile: FC = () => {
	const { profile, isLoading } = useProfile()
	return (
		<div className='flex gap-10 flex-col'>
			<Heading>
				Мій <span className='text-accent'>профіль</span>
			</Heading>
			{!isLoading && <ProfileData user={profile} />}
			<EditProfile />
		</div>
	)
}

export default Profile
