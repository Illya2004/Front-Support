'use client'
import { useFilters } from '@/hooks/useFilters'
import { LocationService } from '@/services/location.service'
import { selectStylesNEW } from '@/ui/select.stylesNEW'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState, type FC } from 'react'
import Select from 'react-select'

import { useDebounce } from '@/hooks/useDebounce'
import { ISelectOptions } from '@/interfaces/filter.interfaces'
interface ILocationFilterProps {}
const LocationFilter: FC<ILocationFilterProps> = ({}) => {
	const [settleSearch, setSettleSearch] = useState('')
	const debouncedSettlement = useDebounce(settleSearch, 500)
	const { updateQueryParams } = useFilters()
	const { mutate: settleMutate, data: settlements } = useMutation({
		mutationKey: ['getSettlements'],
		mutationFn: (findByString: string) =>
			LocationService.getSettlements(findByString),
	})
	useEffect(() => {
		settleMutate(debouncedSettlement)
	}, [debouncedSettlement])

	const settlementChange = (newValue: string) => {
		setSettleSearch(newValue)
	}

	const onSelectChange = (newValue: ISelectOptions) => {
		updateQueryParams('location', newValue ? newValue.label : '')
		setSettleSearch(newValue.label)
	}

	return (
		<Select
			placeholder='Населений пункт'
			styles={selectStylesNEW()}
			options={settlements}
			onInputChange={settlementChange}
			onChange={onSelectChange}
		/>
	)
}

export default LocationFilter
