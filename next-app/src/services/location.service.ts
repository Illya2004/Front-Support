import { instanceLocation } from '@/api/interceptors'

export const LocationService = {
	async getSettlements(findByString: string) {
		const response = await instanceLocation.post('/', {
			modelName: 'Address',
			calledMethod: 'getSettlements',
			methodProperties: {
				Limit: 50,
				FindByString: findByString,
			},
		})

		const formatedResponse = response.data.data.map((data: any) => {
			return {
				value: data.Ref,
				label: data.Description + ' (' + data.AreaDescription + ')',
			}
		})
		return [{ value: '', label: '' }, ...formatedResponse]
	},
}
