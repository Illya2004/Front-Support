'use client'
import { ICreatePost } from '@/interfaces/post.interfaces'
import Button from '@/ui/Button'
import ValidationField from '@/ui/ValidationField'
import { type FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Categories from './Categories'
import Location from './Location'
interface IAddPostProps {
	submitFunction: (data: ICreatePost) => void
	type: 'create' | 'update'
	defaultValues?: any
}

const AddPostForm: FC<IAddPostProps> = ({
	submitFunction,
	type,
	defaultValues,
}) => {
	const { control, handleSubmit } = useForm<ICreatePost>({
		defaultValues: {
			categories: defaultValues?.categories,
			location: defaultValues?.location,
			description: defaultValues?.description,
		},
	})

	const onSubmit: SubmitHandler<any> = data => {
		submitFunction({ ...data, location: data.location.label })
		console.log(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-5 w-[30rem]'
		>
			<div className='font-semibold text-2xl my-5'>
				{type === 'create' ? 'Створити новий' : 'Редагувати'} запит
			</div>
			<Location control={control} defaultValue={defaultValues?.location} />
			<Categories control={control} defaultValues={defaultValues?.categories} />
			<ValidationField
				component='textarea'
				control={control}
				name='description'
				label='Опис'
				placeholder='Напишіть хто ви'
			/>
			<Button variant='outlined' wFull>
				{type === 'create' ? 'Створити' : 'Редагувати'}
			</Button>
		</form>
	)
}

export default AddPostForm
