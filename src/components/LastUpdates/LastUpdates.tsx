import { useNews } from '../../contexts/NewsContext';
import { LastUpdateCard } from '../LastUpdateCard/LastUpdateCard';

export const LastUpdates = () => {
	const { newss } = useNews();

	return (
		<section>
			<h2 className='text-3xl text-gray-200 font-semibold mb-10'>
				Last Updates
			</h2>
			{newss.length === 0 ? (
				<p>Empty</p>
			) : (
				<div className='flex flex-col gap-y-4'>
					{newss.map((news) => {
						return <LastUpdateCard newsKey={news.name} data={news} />;
					})}
				</div>
			)}
		</section>
	);
};
