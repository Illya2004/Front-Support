'use client'
import { EnumRole } from '@/app/auth/role.enum'
import { useProfile } from '@/hooks/useProfile'
import { ICreatePost, IPost } from '@/interfaces/post.interfaces'
import { PostService } from '@/services/post.service'
import Modal from '@/ui/Modal'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState, type FC } from 'react'
import { toast } from 'sonner'
import PostsList from '../../posts/PostsList'
import AddPostForm from '../../sidebar/addPost/AddPost'

const UserPostList: FC = () => {
	const queryClient = useQueryClient()
	const [isCreating, setIsCreating] = useState(false)
	const [postId, setPostId] = useState<number | null>(null)
	const { profile } = useProfile()

	const [error, setError] = useState(false)
	const { data: userPostsResponse, isFetched } = useQuery({
		queryKey: ['getAllPostsByUser'],
		queryFn: PostService.getAllPostsByUser,
	})
	const { data, isFetched: isFetchedPostId } = useQuery({
		queryKey: ['getPostById'],
		queryFn: () => PostService.getPostById(postId),
		enabled: !!postId,
	})

	const { mutate } = useMutation({
		mutationKey: ['updatePost'],
		mutationFn: (data: ICreatePost) => PostService.updatePost(postId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllPostsByUser'] })
			toast.success('Запит відредаговано успішно!')
		},
	})
	const { mutate: mutateDelete } = useMutation({
		mutationKey: ['deletePost'],
		mutationFn: (postId: number) => PostService.deletePost(postId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllPostsByUser'] })
			toast.success('Запит видалено успішно!')
		},
	})
	const { mutate: mutateСreate } = useMutation({
		mutationKey: ['createPost'],
		mutationFn: (data: ICreatePost) => PostService.createPost(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllPostsByUser'] })
			toast.success('Запит створено успішно!')
		},
	})

	return (
		<>
			{isFetched && userPostsResponse && (
				<PostsList
					deletePost={mutateDelete}
					updatePost={(post: IPost) => setPostId(post.requestId)}
					isPagination={false}
					postResponse={userPostsResponse}
					title={
						<div className='flex justify-between'>
							{userPostsResponse.requests.length > 0 ? (
								<div>Мої запити</div>
							) : (
								<div className='text-2xl'>
									Запитів <span className='text-accent'>немає!</span>
								</div>
							)}
							{profile?.role === EnumRole.AUTHOR && (
								<button onClick={() => setIsCreating(true)}>
									<Plus />
								</button>
							)}
						</div>
					}
					modal={
						<>
							{isFetchedPostId && (
								<AddPostForm
									type='update'
									submitFunction={mutate}
									defaultValues={data}
								/>
							)}
						</>
					}
				/>
			)}
			{isCreating && (
				<Modal onClose={() => setIsCreating(false)}>
					<AddPostForm submitFunction={mutateСreate} type={'create'} />
				</Modal>
			)}
		</>
	)
}

export default UserPostList
