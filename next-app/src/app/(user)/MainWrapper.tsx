import { PropsWithChildren, type FC } from 'react'
const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div className='grid grid-cols-3 gap-20 mt-10'>{children}</div>
}

export default MainWrapper
