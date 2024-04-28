import { cn } from '@/utils/utils'
import { FC, HTMLInputTypeAttribute, ReactNode } from 'react'
import type {
	ControllerRenderProps,
	UseFormRegisterReturn,
} from 'react-hook-form'
interface IInput {
	iconStart?: ReactNode
	iconEnd?: ReactNode
	title?: string
	register?: UseFormRegisterReturn<any>
	field?: ControllerRenderProps<any, any>
	min?: number
	max?: number
	value?: any
	label?: string
	inputClassName?: string
	inputType?: HTMLInputTypeAttribute
	className?: string
	placeholder?: string
	error?: any
}

const Input: FC<IInput> = ({
	iconStart,
	iconEnd,
	inputClassName,
	title,
	className,
	label,
	inputType,
	register,
	...props
}) => {
	return (
		<div>
			<label className='text-lg'>{label}</label>
			<div
				className={cn(
					'bg-secondary rounded-lg flex items-center mb-3',
					className
				)}
			>
				{iconStart}
				<input
					aria-autocomplete='none'
					type={inputType}
					{...props}
					{...register}
					autoComplete='off'
					className={cn(
						'bg-transparent p-3 focus:outline-none w-full placeholder:text-tertiary placeholder:font-light',
						inputClassName
					)}
				/>
			</div>
		</div>
	)
}

export default Input
