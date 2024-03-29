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
					<a
						href='https://kwinkich.fun'
						target='_blank'
						className='text-lg text-white hover:text-gray-300 duration-300 ease-in-out'
					>
						site
					</a>
				</li>
			</ul>
		</header>
	);
};
