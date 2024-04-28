'use client'
import { Frown } from 'lucide-react'
import { useState, type FC } from 'react'
import Login from './Login'
import { Register } from './Register'

const AuthForm: FC = () => {
	const [isLoginForm, setIsLoginForm] = useState(true)

	return (
		<div className='flex flex-col items-center justify-center w-full h-full text-center gap-7'>
			{isLoginForm ? (
				<Login setIsLoginForm={setIsLoginForm} />
			) : (
				<Register setIsLoginForm={setIsLoginForm} />
			)}
			<button className='flex items-center justify-center text-gray-300 gap-3'>
				<Frown />
				Забули пароль?
			</button>
		</div>
	)
}

export default AuthForm
