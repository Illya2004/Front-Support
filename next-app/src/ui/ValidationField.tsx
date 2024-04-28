import Textarea from '@/ui/Textarea'
import { cn } from '@/utils/utils'
import { type FC, type HTMLInputTypeAttribute, type ReactNode } from 'react'
import { Controller, type Control } from 'react-hook-form'
import Input from './Input'
interface IValidationFieldProps {
	control: Control<any>
	name: string
	label?: string
	placeholder?: string
	component?: 'textarea' | 'input'
	iconRight?: ReactNode
	inputType?: HTMLInputTypeAttribute
	error?: string | null
	rules?: any
}
const ValidationField: FC<IValidationFieldProps> = ({
	control,
	name,
	label,
	placeholder,
	component,
	iconRight,
	inputType,
	error,
	rules,
}) => {
	const Component = component === 'textarea' ? Textarea : Input

	return (
		<Controller
			name={name}
			control={control}
			rules={{
				...rules,
				required: `${label ? label : placeholder} це обов'язкове поле`,
			}}
			render={({ fieldState, field }) => (
				<>
					<Component
						inputType={inputType}
						iconEnd={iconRight}
						label={label}
						{...field}
						className={cn({
							'border border-red-500': fieldState.error || error,
						})}
						placeholder={placeholder}
					/>
					{fieldState.error && (
						<p className='text-red-500'>{fieldState.error.message}</p>
					)}
				</>
			)}
		/>
	)
}

export default ValidationField
