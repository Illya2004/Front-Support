import { cn } from '@/utils/utils'
import { Check } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'
interface ICheckboxProps {
	isChecked: boolean
	onClick?: () => void
	register?: UseFormRegisterReturn<any>
	contClassName?: string
	className?: string
	style?: {}
}
const Checkbox: FC<PropsWithChildren<ICheckboxProps>> = ({
	isChecked,
	onClick,
	contClassName,
	className,
	children,
	style,
	register,
}) => {
	return (
		<button
			type='button'
			className={cn('flex items-center', contClassName)}
			onClick={onClick && onClick}
			{...register}
		>
			<span
				className={cn(
					'h-5 w-5 rounded  text-transparent text-white border-2 flex items-center justify-center ',
					{ 'text-accent border-accent': isChecked },
					className
				)}
				style={style}
			>
				<Check size={15} strokeWidth={4} />
			</span>
			<span className='ml-4'>{children}</span>
		</button>
	)
}

export default Checkbox
