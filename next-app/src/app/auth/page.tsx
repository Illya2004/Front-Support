import soldierImg from '@/assets/images/auth/soldier.jpg'
import Logo from '@/ui/Logo'
import { type NextPage } from 'next'
import Image from 'next/image'
import AuthForm from './AuthForm'
const AuthPage: NextPage = () => {
	return (
		<div className='grid grid-cols-2 gap-5 '>
			<div className='absolute top-5 left-20'>
				<Logo />
			</div>
			<AuthForm />

			<Image
				className='h-screen w-screen object-cover'
				src={soldierImg}
				alt={''}
				width={512}
				height={200}
			/>
		</div>
	)
}

export default AuthPage
