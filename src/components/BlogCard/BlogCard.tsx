import { Button } from '../Button/Button';

export const BlogCard = () => {
	return (
		<div className='border-2 border-gray-100 w-[400px] hover:bg-neutral-900 duration-300 ease-in-out'>
			<div className='flex flex-col px-10 py-8'>
				<h3 className='text-2xl text-white font-semibold'>Blog Card</h3>
				<p className='text-lg text-white mb-5'>Description</p>
				<Button>Read full</Button>
			</div>
		</div>
	);
};
