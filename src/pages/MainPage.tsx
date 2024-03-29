import axios from 'axios';
import { useEffect, useState } from 'react';
import { BlogCard } from '../components/BlogCard/BlogCard';
import { Header } from '../components/Header/Header';
import { LastUpdates } from '../components/LastUpdates/LastUpdates';
import { Post } from '../types/Post';

export default function MainPage() {
	const [postsData, setPostsData] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					'https://blog-server-ruvh.onrender.com/api/posts'
				);
				setPostsData(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPosts();
	}, []);

	return (
		<main className='section'>
			<Header />
			<div className='flex justify-between'>
				<div>
					<h1 className='h1 mb-10'>Articles</h1>

					{postsData.length === 0 ? (
						<p className='text-xl text-white'>Empty</p>
					) : (
						<div className='max-w-max grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-x-7 gap-y-7'>
							{postsData.map((post) => (
								<BlogCard key={post._id} data={post} />
							))}
						</div>
					)}
				</div>
				<LastUpdates />
			</div>
		</main>
	);
}
