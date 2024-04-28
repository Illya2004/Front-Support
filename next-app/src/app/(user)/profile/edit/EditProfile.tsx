'use client'
import { type IEditProfileForm } from '@/interfaces/user.interfaces'
import { UserService } from '@/services/user.service'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type FC } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Toaster, toast } from 'sonner'

const EditProfile: FC = () => {
	const queryClient = useQueryClient()
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<IEditProfileForm>()
	const { mutate } = useMutation({
		mutationKey: ['updateProfileData'],
		mutationFn: (data: IEditProfileForm) => UserService.updateProfile(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getProfile'] })
			reset()
			toast.success('Профіль відредаговано успішно!')
		},
		onError: () => {
			queryClient.invalidateQueries({ queryKey: ['getProfile'] })
			reset()
			toast.error('Помилка редагування профілю!')
		},
	})
	const onSubmit: SubmitHandler<IEditProfileForm> = data => {
		mutate(data)
	}
	return (
		<form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
			<Input
				register={register('username')}
				label="Редагувати ім'я та прізвище"
				placeholder="Ім'я та прізвище"
			/>
			<Input
				register={register('phone_number')}
				placeholder='Номер телефону'
				label='Редагувати номер телефону'
			/>
			<Input
				register={register('password')}
				label='Редагувати пароль'
				placeholder='Старий пароль'
				error={errors.new_password?.message}
			/>
			<Input
				register={register('new_password', {
					required: watch('password') && 'Новий пароль обовязковий',
				})}
				error={errors.new_password?.message}
				placeholder='Новий пароль'
			/>

			<p>
				{errors.new_password && (
					<span className='text-red-500'>{errors.new_password.message}</span>
				)}
			</p>
			<Button className='w-full'>Редагувати</Button>
			<Toaster richColors />
		</form>
	)
}

export default EditProfile
