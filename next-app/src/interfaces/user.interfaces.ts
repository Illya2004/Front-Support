import { EnumRole } from '@/app/auth/role.enum'

export interface IUser {
	id: number
	email: string
	username: string
	phone_number: string
	role: EnumRole
	favourites: number[]
}

export interface IInitialState {
	user: IUser | null
	isLoading: boolean
	errorLogin: string | null
	errorRegister: string | null
	isSuccessLogin: boolean | null
	isSuccessRegister: boolean | null
}
export interface IEditProfileForm {
	username: string
	password: string
	new_password: string
	phone_number: string
}
