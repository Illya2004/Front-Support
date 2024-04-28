import { IUser } from './user.interfaces'

export interface IPost {
	requestId: number
	description: string
	location: string
	user: IUser
	categories: IPostCategory[]
}
export interface ICreatePost extends Omit<IPost, 'id' | 'user'> {}
export interface IPostCategory {
	id: number
	name: string
}
export interface IPostResponse {
	requests: IPost[]
	count: number
}

export interface IPostsUserResponse {
	requestsCount: number
	requests: IPost[]
}
