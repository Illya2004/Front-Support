import { EnumRole } from '@/app/auth/role.enum'
import { cn } from '@/utils/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, type FC, type PropsWithChildren } from 'react'
interface IFilterProps {
	title: string
}
const SidebarWrapper: FC<PropsWithChildren<IFilterProps>> = ({
	title,
	children,
}) => {
	const [isShow, setIsShow] = useState(true)
	const user = {
		role: 'AUTHOR',
	}
	const isUserType = user.role === EnumRole.USER
	return (
		<div className='mb-5'>
			<div
				className={cn({
					' bg-secondary flex justify-between p-3 rounded-lg text-gray-400 ':
						isUserType,
				})}
				onClick={() => setIsShow(!isShow)}
			>
				<span className='text-xl'>{title}</span>
				<motion.span
					className={cn({ hidden: !isUserType })}
					animate={{ rotateZ: isShow ? '180deg' : 0 }}
				>
					<ChevronDown />
				</motion.span>
			</div>
			<AnimatePresence>
				{isShow && (
					<motion.div key='modal'>
						<div
							className={cn(' py-5 flex flex-col gap-5', {
								'p-5': isUserType,
							})}
						>
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default SidebarWrapper
