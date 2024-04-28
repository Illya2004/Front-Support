import Logo from '@/ui/Logo'
import { type FC } from 'react'
import HeaderUser from './header-user/HeaderUser'
const Header: FC = () => {
	return (
		<div className='flex justify-between py-5 px-20'>
			<Logo />
			<div className='flex gap-5'>
				<HeaderUser />
			</div>
		</div>
	)
}

export default Header
