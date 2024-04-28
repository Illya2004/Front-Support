export interface IFilterData {
	categories?: string
	limit?: number
	page?: number
	location?: string
}
export interface IFiltersActionPayload {
	key: keyof IFilterData
	value: string
}

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: IFilterData
}
export interface ISelectOptions {
	value: string
	label: string
}
