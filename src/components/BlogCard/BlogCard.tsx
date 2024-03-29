import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types/Post';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';

interface BlogCardProps {
	data: Post;
}

export const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
	return (
		<Link to={`/post/${data._id}`}>
			<div className='border-2 border-gray-100 w-[450px] hover:bg-neutral-900 duration-300 ease-in-out'>
				<div className='flex flex-col px-10 py-8'>
					<h3 className='text-2xl text-white font-semibold line-clamp-1 mb-2'>
						{data.title}
					</h3>
					<p className='text-lg text-white mb-3 line-clamp-2'>
						{data.description}
					</p>
					<div className='flex flex-wrap gap-x-2 gap-y-2 mb-5'>
						{Object.values(data.tags).map((tag, index) => (
							<Tag key={index}>{tag}</Tag>
						))}
					</div>
					<Button>Read full</Button>
				</div>
			</div>
		</Link>
	);
};
