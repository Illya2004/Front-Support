import Image from 'next/image'
import { type FC } from 'react'
import avatar from '../assets/images/avatar.svg'
const Avatar: FC = () => {
	return <Image src={avatar} alt='avatar' width={50} />
}

export default Avatar
