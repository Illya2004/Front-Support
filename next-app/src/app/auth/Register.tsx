import { useActions } from '@/hooks/useActions'
import { IRegister } from '@/interfaces/auth.interfaces'
import { useTypedSelector } from '@/store/store'
import Button from '@/ui/Button'
import Heading from '@/ui/Heading'
import ValidationField from '@/ui/ValidationField'
import { cn } from '@/utils/utils'
import { Eye, EyeOff } from 'lucide-react'
import {
	useEffect,
	useState,
	type Dispatch,
	type FC,
	type SetStateAction,
} from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import RoleForm from './RoleForm'
interface IRegisterProps {
	setIsLoginForm: Dispatch<SetStateAction<boolean>>
}
export const Register: FC<IRegisterProps> = ({ setIsLoginForm }) => {
	const [visiblePassword, setVisiblePassword] = useState(false)
	const { handleSubmit, control, watch } = useForm<IRegister>()
	const { register } = useActions()
	const watchRole = watch('role')
	const errorMessage = useTypedSelector(state => state.user.errorRegister)
	const isSuccess = useTypedSelector(state => state.user.isSuccessRegister)

	const onSubmit: SubmitHandler<IRegister> = data => {
		register(data)
	}
	useEffect(() => {
		if (isSuccess) setIsLoginForm(true)
	}, [isSuccess])
	return !watchRole ? (
		<RoleForm control={control} setIsLoginForm={setIsLoginForm} />
	) : (
		<>
			<div className='flex flex-col gap-3 w-3/5'>
				<Heading>Вперше на нашому сайті? Зареєструйтесь!</Heading>
				<p>
					Вже маєте акаунт? Увійдіть{' '}
					<button
						className='text-accent'
						onClick={() => setIsLoginForm(prevState => !prevState)}
					>
						Вхід
					</button>
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
				<ValidationField
					control={control}
					name='username'
					placeholder="Ім'я та прізвище"
					inputType='text'
					error={errorMessage}
				/>

				<ValidationField
					control={control}
					name='phoneNumber'
					placeholder='Номер телефону'
					error={errorMessage}
				/>
				<ValidationField
					control={control}
					name='email'
					placeholder='Пошта'
					inputType='email'
				/>
				<ValidationField
					control={control}
					name='password'
					rules={{
						pattern: {
							value: /^(?=.*\d)(?=.*[A-Z]).{8,}$/,
							message:
								'Пароль повинен містити принаймні 8 символів, одну цифру та одну велику літеру',
						},
					}}
					placeholder='Пароль'
					error={errorMessage}
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

				<Button type='submit'>Зареєструватися</Button>
			</form>
		</>
	)
}
export default Register
