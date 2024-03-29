import { Link } from 'react-router-dom';
import { News } from '../../types/News';

interface LastUpdateCardProps {
	data: News;
}

export const LastUpdateCard: React.FC<LastUpdateCardProps> = ({ data }) => {
	return (
		<Link to={`/news/${data._id}`}>
			<div className='cursor-pointer border-2 w-[250px] border-gray-200 hover:bg-neutral-900 duration-300 ease-in-out'>
				<div className='flex flex-col px-5 py-4'>
					<h3 className='text-xl text-gray-200 font-medium line-clamp-1'>
						{data.title}
					</h3>
					<p className='text-lg text-gray-200 line-clamp-2'>
						{data.description}
					</p>
				</div>
			</div>
		</Link>
	);
};
