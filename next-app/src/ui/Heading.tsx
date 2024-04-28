import { cn } from '@/utils/utils'
import { PropsWithChildren, type FC } from 'react'
interface IHeadingProps {
	variant?: 'h1' | 'h2' | 'h3' | 'h4'
	className?: string
}
const Heading: FC<PropsWithChildren<IHeadingProps>> = ({
	children,
	variant = 'h1',
	className,
}) => {
	return (
		<h1
			className={cn(
				'font-semibold text-4xl',
				{
					'text-2xl': variant === 'h2',
					'text-xl': variant === 'h3',
					'text-lg': variant === 'h4',
				},
				className
			)}
		>
			{children}
		</h1>
	)
}

export default Heading
