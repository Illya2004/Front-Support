import { ICreatePost } from '@/interfaces/post.interfaces'
import { CategoryService } from '@/services/category.service'
import Checkbox from '@/ui/Checkbox'
import { cn } from '@/utils/utils'
import { useQuery } from '@tanstack/react-query'
import { useState, type FC } from 'react'
import { Controller, type Control } from 'react-hook-form'
interface ICategoriesProps {
	control: Control<ICreatePost, any>
	defaultValues?: number[]
}
const Categories: FC<ICategoriesProps> = ({ control, defaultValues }) => {
	const [selectedCategories, setSelectedCategories] = useState<number[]>(
		defaultValues ? defaultValues : []
	)
	const { data: categories } = useQuery({
		queryKey: ['getAllCategories'],
		queryFn: () => CategoryService.getAllCategories(),
	})

	const onClick = (catId: number, func: any) => {
		const updatedCategories = [...selectedCategories]
		if (updatedCategories.includes(catId)) {
			updatedCategories.splice(updatedCategories.indexOf(catId), 1)
		} else {
			updatedCategories.push(catId)
		}
		setSelectedCategories(updatedCategories)
		func(updatedCategories)
	}

	return (
		<div>
			<div className='text-xl'>Ваші потреби</div>
			<Controller
				name='categories'
				control={control}
				rules={{ required: 'Payment is required' }}
				render={({ fieldState, field }) => (
					<>
						{categories?.map(cat => {
							return (
								<Checkbox
									{...field}
									key={cat.name}
									isChecked={selectedCategories.includes(cat.id)}
									className={cn({ 'border-red-500': fieldState.error })}
									contClassName='my-4'
									onClick={() => onClick(cat.id, field.onChange)}
								>
									{cat.name}
								</Checkbox>
							)
						})}
						{fieldState.error && (
							<p className='text-red-500'>{fieldState.error.message}</p>
						)}
					</>
				)}
			/>
		</div>
	)
}

export default Categories
