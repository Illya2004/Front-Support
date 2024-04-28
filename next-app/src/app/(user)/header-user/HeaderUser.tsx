'use client'
import { colorConstants } from '@/constants/color.constants'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import Avatar from '@/ui/Avatar'
import Button from '@/ui/Button'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type FC } from 'react'
import { headerUserData } from './header-user.data'
const HeaderUser: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { logout } = useActions()
	const user = useAuth()
	const { push } = useRouter()
	const handleMenuItemClick = (url?: string) => {
		if (url) {
			push(url)
		} else {
			logout()
		}
		setIsShow(false)
	}
	return (
		<div>
			<div>
				{user ? (
					<button onClick={() => setIsShow(!isShow)}>
						<Avatar />
					</button>
				) : (
					<Link href='/auth'>
						<Button variant='outlined'>Вхід</Button>
					</Link>
				)}
			</div>
			{isShow && (
				<ul
					ref={ref}
					className='border rounded-xl p-3 pr-10 w-32 absolute right-20 bg-white shadow-md'
				>
					{headerUserData.map(data => (
						<li
							onClick={() => handleMenuItemClick(data.url)}
							className='cursor-pointer'
						>
							{data.label}
						</li>
					))}

					<button
						className='absolute top-1 right-1'
						onClick={() => setIsShow(!isShow)}
					>
						<X color={colorConstants.accent} size={20} />
					</button>
				</ul>
			)}
		</div>
	)
}

export default HeaderUser
