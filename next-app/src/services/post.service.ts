import {
	instance,
	instanceWithAuthIllia,
	instanceWithAuthStas,
} from '@/api/interceptors'
import { type IFilterData } from '@/interfaces/filter.interfaces'
import { ICreatePost, IPostResponse } from '@/interfaces/post.interfaces'

export const PostService = {
	async getPosts(data: any) {
		const response = await instance.get<IFilterData, { data: IPostResponse }>(
			'/requests/',
			{ params: data }
		)
		return response.data
	},
	async getPostById(postId: number | null) {
		const response = await instanceWithAuthStas.get<IPostResponse>(
			`/requests/${postId}`
		)
		return response.data
	},
	async createPost(data: ICreatePost) {
		const response = await instanceWithAuthIllia.post('/requests/create', data)
		return response.data
	},
	async updatePost(postId: number | null, data: ICreatePost) {
		const response = await instanceWithAuthStas.put(
			`/requests/edit/${postId}`,
			{
				description: data.description,
				location: data.location,
				categories: data.categories,
			}
		)
		return response
	},
	async deletePost(id: number) {
		const response = await instanceWithAuthStas.delete(`/requests/delete/${id}`)
		return response.data
	},
	async getAllPostsByUser() {
		const response = await instanceWithAuthStas.get<IPostResponse>(
			'/requests/user/',
			{ params: { offset: 0, limit: 5 } }
		)
		return response.data
	},
	async addToFavorite(postId: number) {
		const response = await instanceWithAuthStas.post(`/requests/like/${postId}`)
		return response.data
	},
}
