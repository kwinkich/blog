import axios from 'axios';
import { useEffect, useState } from 'react';
import { News } from '../../types/News';
import { LastUpdateCard } from '../LastUpdateCard/LastUpdateCard';

export const LastUpdates = () => {
	const [newsData, setNewsData] = useState<News[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					'https://blog-server-3xmv.onrender.com/api/news'
				);
				setNewsData(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPosts();
	}, []);

	return (
		<section className='sm:mb-0 mb-12'>
			<h2 className='text-3xl text-gray-200 font-semibold mb-10'>
				Last Updates
			</h2>
			{newsData.length === 0 ? (
				<p className='text-xl text-white'>Empty</p>
			) : (
				<div className='flex flex-col gap-y-4'>
					{newsData.map((news) => {
						return <LastUpdateCard key={news._id} data={news} />;
					})}
				</div>
			)}
		</section>
	);
};
