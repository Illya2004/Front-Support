'use client'
import { useFilters } from '@/hooks/useFilters'
import { IPost } from '@/interfaces/post.interfaces'
import { PostService } from '@/services/post.service'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import MainWrapper from './MainWrapper'
import PostsList from './posts/PostsList'
import Contacts from './posts/contacts/Contacts'
import Sidebar from './sidebar/Sidebar'

function HomePage() {
	const [post, setPost] = useState<IPost | null>(null)

	const { queryParams, isFilterUpdated } = useFilters()
	const { data: postResponse, isFetched } = useQuery({
		queryKey: ['getPosts'],
		queryFn: () =>
			PostService.getPosts({
				limit: 5,
				page: 1,
				location: '',
				categories: '',
				filterDate: 'DESC',
			}),
		enabled: !!isFilterUpdated,
	})
	return (
		<MainWrapper>
			<Sidebar />
			{isFetched && postResponse && (
				<PostsList
					updatePost={(post: IPost) => setPost(post)}
					postResponse={postResponse}
					title={
						<Heading variant='h2' className='text-accent'>
							Актуальні
						</Heading>
					}
					modal={
						<Contacts
							email={post?.user.email}
							phoneNumber={post?.user.phone_number}
							username={post?.user.username}
						/>
					}
				/>
			)}
		</MainWrapper>
	)
}
export default HomePage
