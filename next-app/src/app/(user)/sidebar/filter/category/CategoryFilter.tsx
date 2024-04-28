'use client'
import { useFilters } from '@/hooks/useFilters'
import { CategoryService } from '@/services/category.service'
import Checkbox from '@/ui/Checkbox'
import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import SidebarWrapper from '../../SidebarWrapper'
import { updateCategoriesQuery } from './update-category-query'
interface ICategoryFilterProps {}
const CategoryFilter: FC<ICategoryFilterProps> = ({}) => {
	const { data: categories } = useQuery({
		queryKey: ['getAllCategories'],
		queryFn: () => CategoryService.getAllCategories(),
	})

	const { queryParams, updateQueryParams } = useFilters()
	const onCheckboxClick = (newCategory: string) => {
		updateQueryParams(
			'categories',
			updateCategoriesQuery(
				queryParams.categories ? queryParams.categories : '',
				newCategory
			)
		)
	}
	return (
		<SidebarWrapper title={'Потреби'}>
			{categories?.map(cat => (
				<Checkbox
					key={cat.name}
					isChecked={
						queryParams.categories
							? queryParams.categories?.includes(cat.name)
							: false
					}
					onClick={() => onCheckboxClick(cat.name)}
				>
					{cat.name}
				</Checkbox>
			))}
		</SidebarWrapper>
	)
}

export default CategoryFilter
