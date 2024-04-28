'use client'
import Pagination from '@/components/pagination/Pagination'
import { useFilters } from '@/hooks/useFilters'
import { IPost, IPostResponse } from '@/interfaces/post.interfaces'
import Confirm from '@/ui/Confirm'
import { useState, type FC, type ReactNode } from 'react'
import PostItem from './PostItem'
interface IPostsListProps {
	postResponse: IPostResponse
	title: ReactNode
	deletePost?: (postId: number) => void
	modal: ReactNode
	isPagination?: boolean
	updatePost?: (post: IPost) => void
}
const PostsList: FC<IPostsListProps> = ({
	postResponse,
	title,
	deletePost,
	modal,
	isPagination,
	updatePost,
}) => {
	const [isAlert, setIsAlert] = useState<null | number>(null)
	const { queryParams, updateQueryParams } = useFilters()

	const pagesCount = queryParams.limit
		? Math.ceil(postResponse.count / +queryParams.limit)
		: 0

	return (
		<main className='w-full col-span-2'>
			<div className='my-5'>
				{title}
				{postResponse.requests.map(post => (
					<PostItem
						editPostFunc={updatePost ? updatePost : undefined}
						post={post}
						key={post.id}
						deletePostFunc={
							deletePost ? (postId: number) => setIsAlert(postId) : undefined
						}
						modal={modal}
					/>
				))}
			</div>
			{isPagination ||
				(pagesCount === 0 && (
					<Pagination
						updatePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={pagesCount}
					/>
				))}
			{isAlert && (
				<Confirm
					isOpen={Boolean(isAlert)}
					onClose={() => setIsAlert(null)}
					confirmFunction={() => deletePost && deletePost(isAlert)}
					title='Ви впевнені, що хочете видалити запит?'
				/>
			)}
		</main>
	)
}

export default PostsList
