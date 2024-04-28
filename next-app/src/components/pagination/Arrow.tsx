import Button from '@/ui/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

interface IProps {
	direction: 'left' | 'right'
	clickFunction: (direction: string) => void
	contained?: boolean
	disabled?: boolean
}

const Arrow: React.FC<IProps> = ({
	direction,
	clickFunction,
	contained,
	disabled,
}) => {
	const icon =
		direction === 'left' ? (
			<ChevronLeft size={24} />
		) : (
			<ChevronRight size={24} />
		)

	return (
		<Button
			variant={disabled ? 'contained' : 'outlined'}
			onClick={() => clickFunction(direction)}
			className='rounded-full p-2'
			disabled={disabled}
		>
			{icon}
		</Button>
	)
}
export default Arrow
