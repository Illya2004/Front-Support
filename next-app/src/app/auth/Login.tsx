import { useActions } from '@/hooks/useActions'
import { IRegister } from '@/interfaces/auth.interfaces'
import { useTypedSelector } from '@/store/store'
import Button from '@/ui/Button'
import Heading from '@/ui/Heading'
import ValidationField from '@/ui/ValidationField'
import { cn } from '@/utils/utils'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
	useEffect,
	useState,
	type Dispatch,
	type FC,
	type SetStateAction,
} from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
interface ILoginProps {
	setIsLoginForm: Dispatch<SetStateAction<boolean>>
}
const Login: FC<ILoginProps> = ({ setIsLoginForm }) => {
	const [visiblePassword, setVisiblePassword] = useState(false)
	const { replace } = useRouter()
	const { handleSubmit, control } = useForm<IRegister>()
	const { login } = useActions()
	const isSuccess = useTypedSelector(state => state.user.isSuccessLogin)
	const errorMessage = useTypedSelector(state => state.user.errorLogin)
	const onSubmit: SubmitHandler<IRegister> = data => {
		login(data)
	}
	useEffect(() => {
		if (isSuccess) replace('/')
	}, [isSuccess])

	return (
		<>
			<div className='flex flex-col gap-3 w-3/5'>
				<Heading>Вже маєте акаунт? Увійдіть!</Heading>
				<p>
					Вперше на нашому сайті? Зареєструйтесь{' '}
					<button
						className='text-accent'
						onClick={() => setIsLoginForm(prevState => !prevState)}
					>
						Реєстрація
					</button>
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
				<ValidationField
					control={control}
					name='email'
					placeholder='Пошта'
					error={errorMessage}
				/>
				<ValidationField
					error={errorMessage}
					control={control}
					name='password'
					placeholder='Пароль'
					inputType={visiblePassword ? 'text' : 'password'}
					iconRight={
						<button
							className='pr-3'
							type='button'
							onClick={() => setVisiblePassword(!visiblePassword)}
						>
							{visiblePassword ? <EyeOff /> : <Eye />}
						</button>
					}
				/>
				<p className={cn({ 'text-red-500': errorMessage })}>{errorMessage}</p>
				<Button type='submit'>Увійти</Button>
			</form>
		</>
	)
}

export default Login
