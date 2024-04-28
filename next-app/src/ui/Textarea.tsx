import { cn } from '@/utils/utils'
import { type FC } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'
interface ITextareaProps {
	label?: string
	className?: string
	rows?: number
	placeholder?: string
	register?: UseFormRegisterReturn<any>
}
const Textarea: FC<ITextareaProps> = ({
	label,
	className,
	rows = 5,
	placeholder,
	register,
	...rest
}) => {
	return (
		<div>
			<label htmlFor='textarea' className='text-xl'>
				{label}
			</label>
			<textarea
				{...register}
				{...rest}
				id='textarea'
				placeholder={placeholder}
				className={cn(
					'focus:outline-none bg-secondary resize-none rounded-lg w-full p-3 my-5',
					className
				)}
				rows={rows}
			/>
		</div>
	)
}

export default Textarea
