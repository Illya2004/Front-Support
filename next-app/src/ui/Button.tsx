import { cn } from '@/utils/utils'
import { MouseEventHandler, type FC, type PropsWithChildren } from 'react'
interface IButtonProps {
	className?: string
	type?: 'button' | 'submit' | 'reset'
	variant?: 'outlined' | 'contained'
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	wFull?: boolean
}
const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	type,
	className,
	variant = 'contained',
	onClick,
	disabled = false,
	wFull,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={cn(
				'p-3 px-7 h-min w-min text-center rounded-lg',
				className,
				{
					'bg-accent text-white': variant === 'contained',
				},
				{
					'bg-white text-accent border border-accent': variant === 'outlined',
				},
				{ 'w-full': wFull }
			)}
		>
			{children}
		</button>
	)
}

export default Button

// import { cn } from '@/utils/utils'
// import Link from 'next/link'
// import { MouseEventHandler, PropsWithChildren, forwardRef } from 'react'
// type Ref = HTMLButtonElement

// interface IButtonProps {
// 	className?: string
// 	type?: 'button' | 'submit' | 'reset'
// 	variant?: 'outlined' | 'contained'
// 	href?: string
// 	onClick?: MouseEventHandler<HTMLButtonElement>
// 	disabled?: boolean
// }
// const Button = forwardRef<Ref, PropsWithChildren<IButtonProps>>(
// 	(props, ref) => {
// 		const { children, variant = 'contained', href, className, ...rest } = props
// 		return (
// 			<Link href={href ? href : '#'}>
// 				<button
// 					ref={ref}
// 					//type={type}
// 					//disabled={disabled}
// 					//onClick={onClick}
// 					{...rest}
// 					className={cn(
// 						'p-3 px-7 text-center  w-full rounded-lg ',
// 						className,
// 						{
// 							'bg-accent text-white': variant === 'contained',
// 						},
// 						{
// 							'bg-white text-accent border border-accent':
// 								variant === 'outlined',
// 						}
// 					)}
// 				>
// 					{children}
// 				</button>
// 			</Link>
// 		)
// 	}
// )

// export default Button
