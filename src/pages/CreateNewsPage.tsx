import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { useNews } from '../contexts/NewsContext';

export default function CreateNewsPage() {
	const [newsName, setNewsName] = useState<string>('');
	const [newsDescription, setNewsDescription] = useState<string>('');

	const { createNews, newss } = useNews();

	function handleCreateNews() {
		const newNews = {
			name: newsName,
			description: newsDescription,
			id: newss.length + 1,
		};
		createNews(newNews);
	}

	return (
		<section className='container mx-auto max-w-[65%]'>
			<Header />
			<div>
				<h1 className='text-4xl text-white font-bold mb-10'>Create New</h1>
				<div className='flex flex-col gap-y-6 max-w-[40%]'>
					<div className='flex items-center gap-x-3 justify-between'>
						<Label labelContent='New name' />
						<Input
							placeholder='New Name'
							onChange={(e) => setNewsName(e.target.value)}
						/>
					</div>
					<div className='flex items-center gap-x-3 justify-between'>
						<Label labelContent='New Content' />
						<Input
							placeholder='New Content'
							onChange={(e) => setNewsDescription(e.target.value)}
						/>
					</div>
					<Button click={handleCreateNews}>Create New</Button>
					<Link to={`/`}>
						<Button>Left</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
