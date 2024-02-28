import { LastUpdateCard } from '../LastUpdateCard/LastUpdateCard';

export const LastUpdates = () => {
	return (
		<section>
			<h2 className='text-3xl text-gray-200 font-semibold mb-10'>
				Last Updates
			</h2>
			<div className='flex flex-col gap-y-4'>
				<LastUpdateCard />
				<LastUpdateCard />
				<LastUpdateCard />
				<LastUpdateCard />
				<LastUpdateCard />
			</div>
		</section>
	);
};
