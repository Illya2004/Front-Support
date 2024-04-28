import { useDebounce } from '@/hooks/useDebounce'
import { ICreatePost } from '@/interfaces/post.interfaces'
import { LocationService } from '@/services/location.service'
import { selectStylesNEW } from '@/ui/select.stylesNEW'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState, type FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import Select from 'react-select'

interface ILocationProps {
	control: Control<ICreatePost, any>
	defaultValue?: string
}

const Location: FC<ILocationProps> = ({ control, defaultValue }) => {
	const [settleSearch, setSettleSearch] = useState(defaultValue)
	const debouncedSettlement = useDebounce(settleSearch, 500)
	const { mutate: settleMutate, data: settlements } = useMutation({
		mutationKey: ['getSettlements'],
		mutationFn: (findByString: string) =>
			LocationService.getSettlements(findByString),
	})
	useEffect(() => {
		debouncedSettlement && settleMutate(debouncedSettlement)
	}, [debouncedSettlement])

	const settlementChange = (newValue: string) => {
		setSettleSearch(newValue)
	}
	return (
		<div>
			<div className='text-xl'>Ваше місцезнаходження</div>
			<Controller
				name='location'
				control={control}
				rules={{ required: 'Payment is required' }}
				render={({ fieldState, field }) => (
					<>
						<Select
							{...field}
							placeholder='Населений пункт'
							styles={selectStylesNEW(fieldState.error)}
							options={settlements}
							inputValue={settleSearch}
							onInputChange={settlementChange}
						/>
						{fieldState.error && (
							<p className='text-red-500'>{fieldState.error.message}</p>
						)}
					</>
				)}
			/>
		</div>
	)
}

export default Location
