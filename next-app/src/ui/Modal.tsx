import { colorConstants } from '@/constants/color.constants'
import { cn } from '@/utils/utils'
import { X } from 'lucide-react'
import { PropsWithChildren, type FC, type LegacyRef } from 'react'
interface IModalProps {
	className?: string
	ref?: LegacyRef<HTMLDivElement>
	onClose: () => void
}
const Modal: FC<PropsWithChildren<IModalProps>> = ({
	children,
	className,
	ref,
	onClose,
}) => {
	return (
		<div
			className='fixed left-0 top-0 w-screen h-screen overflow-auto py-20'
			style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
		>
			<div
				ref={ref}
				className={cn(
					'border border-secondary rounded-2xl bg-white m-auto w-min p-10 px-20 relative',
					className
				)}
				style={{}}
			>
				<button className='absolute top-2 right-2' onClick={onClose}>
					<X color={colorConstants.accent} />
				</button>
				<div className='flex justify-center items-center w-full'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal
