import Logo from '@/ui/Logo'
import { type FC } from 'react'
const Footer: FC = () => {
	return (
		<div className='bg-secondary flex flex-col items-center p-10 mt-20'>
			<Logo size={200} />
			<p className='w-1/2 text-center'>
				Онлайн платформа де військові та волонтери можуть робити запити на
				потреби, а небайдужі люди допомагати їм донатом або іншими речами
			</p>
		</div>
	)
}

export default Footer
