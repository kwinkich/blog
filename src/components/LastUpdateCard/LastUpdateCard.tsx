import { Link } from 'react-router-dom';
import { News } from '../../contexts/NewsContext';

interface LastUpdateCardProps {
	data: News;
	newsKey: string;
}

export const LastUpdateCard: React.FC<LastUpdateCardProps> = ({
	data,
	newsKey,
}) => {
	return (
		<Link to={`/news/${data.id}`}>
			<div
				key={newsKey}
				className='cursor-pointer border-2 w-[250px] border-gray-200 hover:bg-neutral-900 duration-300 ease-in-out'
			>
				<div className='flex flex-col px-5 py-4'>
					<h3 className='text-xl text-gray-200 font-medium'>{data.name}</h3>
					<p className='text-lg text-gray-200'>{data.description}</p>
				</div>
			</div>
		</Link>
	);
};
