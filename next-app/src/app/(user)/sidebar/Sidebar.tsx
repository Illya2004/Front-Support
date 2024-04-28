'use client'
import Heading from '@/ui/Heading'
import { FC } from 'react'
import CategoryFilter from './filter/category/CategoryFilter'
import LocationFilter from './filter/location/LocationFilter'

const Sidebar: FC = () => {
	return (
		<div>
			<Heading>
				Вперед <span className='text-accent'>допомагати!</span>
			</Heading>
			<p className='font-semibold text-2xl my-5'>Пошук</p>
			<LocationFilter />
			<CategoryFilter />
		</div>
	)
}

export default Sidebar
