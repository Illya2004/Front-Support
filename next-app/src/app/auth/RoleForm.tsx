import get_help from '@/assets/images/auth/get_help.svg'
import take_help from '@/assets/images/auth/take_help.svg'
import { IRegister } from '@/interfaces/auth.interfaces'
import Heading from '@/ui/Heading'
import Image from 'next/image'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { Controller, type Control } from 'react-hook-form'
import { EnumRole } from './role.enum'
interface IRoleFormProps {
	setIsLoginForm: Dispatch<SetStateAction<boolean>>
	control: Control<IRegister, any>
}
const RoleForm: FC<IRoleFormProps> = ({ setIsLoginForm, control }) => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full gap-5 text-xl'>
			<Heading variant='h1'>Оберіть хто ви</Heading>
			<Controller
				name='role'
				control={control}
				rules={{
					required: ` це обов'язкове поле`,
				}}
				render={({ fieldState, field: { onChange, ...restField } }) => (
					<>
						<button onClick={() => onChange(EnumRole.USER)}>
							<Image
								src={get_help}
								alt={'Отримати допомоги'}
								width={200}
								height={100}
							/>
						</button>
						<button onClick={() => onChange(EnumRole.AUTHOR)} {...restField}>
							<Image
								src={take_help}
								alt={'Хочу допомагати'}
								width={200}
								height={500}
							/>
						</button>
					</>
				)}
			/>

			<div className='text-center'>
				<p>Вже маєте акаунт?</p>
				<p>
					Увійдіть{' '}
					<button
						onClick={() => setIsLoginForm(prevState => !prevState)}
						className='text-accent'
					>
						Вхід
					</button>
				</p>
			</div>
		</div>
	)
}

export default RoleForm
