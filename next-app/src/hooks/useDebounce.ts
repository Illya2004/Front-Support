import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	const debounced = useCallback(
		debounce((value: T) => {
			setDebouncedValue(value)
		}, delay),
		[]
	)

	useEffect(() => {
		debounced(value)
	}, [value, delay])

	return debouncedValue
}
