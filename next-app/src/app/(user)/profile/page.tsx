import MainWrapper from '../MainWrapper'
import Profile from './edit/Profile'
import UserPostList from './post-list/UserPostList'

function ProfilePage() {
	return (
		<MainWrapper>
			<Profile />
			<UserPostList />
		</MainWrapper>
	)
}

export default ProfilePage
