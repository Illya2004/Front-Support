import { instanceWithAuthIllia } from '@/api/interceptors'
import { IPostCategory } from '@/interfaces/post.interfaces'

export const CategoryService = {
	async getAllCategories() {
		const response = await instanceWithAuthIllia.get<
			void,
			{ data: IPostCategory[] }
		>('requests/categories')
		return response.data
	},
}
