import { useProfile } from '@/hooks/useProfile'
import { IPost } from '@/interfaces/post.interfaces'
import { PostService } from '@/services/post.service'
import Button from '@/ui/Button'
import Modal from '@/ui/Modal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, CircleUserRound, Heart } from 'lucide-react'
import { ReactNode, useState, type FC } from 'react'
interface IAidItemProps {
	editPostFunc?: (post: IPost) => void
	post: IPost
	deletePostFunc?: (postId: number) => void
	modal: ReactNode
}
const PostItem: FC<IAidItemProps> = ({
	editPostFunc,
	post,
	deletePostFunc,
	modal,
}) => {
	const queryClient = useQueryClient()
	const [isShowDetails, setIsShowDetails] = useState(false)
	const [isOpenModal, setIsOpenModal] = useState(false)
	const { profile } = useProfile()

	const { mutate: addToFavorites } = useMutation({
		mutationKey: ['addToFavorites'],
		mutationFn: () => PostService.addToFavorite(post.requestId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['getProfile'],
			})
			queryClient.invalidateQueries({
				queryKey: ['getAllPostsByUser'],
			})
		},
	})

	const onHandleClick = () => {
		setIsOpenModal(true)
		editPostFunc && editPostFunc(post)
	}
	console.log(post)

	return (
		<div className='border rounded-3xl p-5 flex flex-col  my-5 bg-white'>
			<div className='flex justify-between'>
				<div className='text-xl'>{post.location}</div>
				<div className='flex gap-4'>
					<div
						className='flex gap-3 cursor-pointer items-center'
						onClick={() => setIsShowDetails(!isShowDetails)}
					>
						Показати потреби
						<motion.span animate={{ rotateZ: isShowDetails ? '180deg' : 0 }}>
							<ChevronDown />
						</motion.span>
					</div>
					<button onClick={() => addToFavorites()}>
						{profile?.favourites.includes(post.requestId) ? (
							<Heart fill='#000' />
						) : (
							<Heart />
						)}
					</button>
				</div>
			</div>
			<p className='text-tertiary my-5'>Кому потрібно</p>
			<div className='flex justify-between gap-40'>
				<div className='flex gap-5 items-center'>
					<CircleUserRound size={70} />
					<span>{post.description}</span>
				</div>
				<div className='flex gap-5'>
					{deletePostFunc && (
						<Button
							onClick={() => deletePostFunc(post.requestId)}
							variant='outlined'
						>
							Видалити
						</Button>
					)}
					<Button onClick={onHandleClick}>
						{deletePostFunc ? 'Редагувати' : 'Допомогти'}
					</Button>
				</div>
			</div>
			<AnimatePresence>
				{isShowDetails && (
					<motion.div
						className='overflow-hidden'
						animate={{ height: isShowDetails ? 'auto' : 0 }}
						initial={{ height: 0 }}
						exit={{ height: 0 }}
					>
						<div className='mt-10'>
							<p className='my-3 text-lg'>Потреби</p>
							<div className='grid grid-cols-2 gap-5 m'>
								{post.categories.map(category => (
									<div className='bg-secondary rounded-lg p-4 text-black'>
										{category.name}
									</div>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>{modal}</Modal>
			)}
		</div>
	)
}

export default PostItem
