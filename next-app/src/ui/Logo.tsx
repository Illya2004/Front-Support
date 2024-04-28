import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import img from '../assets/images/logo.svg'
const Logo: FC<{ size?: number }> = ({ size = 80 }) => {
	return (
		<Link href={'/'}>
			<Image src={img} alt='Logo' height={50} width={size} />
		</Link>
	)
}
export default Logo
