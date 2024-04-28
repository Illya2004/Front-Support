import { instanceWithAuthStas } from '@/api/interceptors'
import { IEditProfileForm, IUser } from '@/interfaces/user.interfaces'

export const UserService = {
	async profile() {
		const response = await instanceWithAuthStas.get<IUser>('/profile/user/')
		return response.data
	},
	async updateProfile(data: IEditProfileForm) {
		const response = await instanceWithAuthStas.put('/profile/edit', data)
		return response.data
	},
}
