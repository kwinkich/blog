import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='flex justify-between items-center py-10 mb-24'>
			<h1 className='text-2xl text-white leading-5 font-bold'>
				kwinkich
				<br />
				blog
			</h1>
			<ul className='flex gap-x-5'>
				<li>
					<Link to={`/news`}>
						<p className='text-lg text-white hover:text-gray-300 duration-300 ease-in-out'>
							news
						</p>
					</Link>
				</li>
				<li>
					<Link to={`/site`}>
						<p className='text-lg text-white hover:text-gray-300 duration-300 ease-in-out'>
							site
						</p>
					</Link>
				</li>
			</ul>
		</header>
	);
};
