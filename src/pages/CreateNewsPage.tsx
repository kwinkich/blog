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
		<section className='section'>
			<Header />
			<div>
				<h1 className='h1 mb-10'>Create New</h1>
				<div className='form-block'>
					<div className='form'>
						<Label labelContent='New name' />
						<Input
							placeholder='New Name'
							onChange={(e) => setNewsName(e.target.value)}
						/>
					</div>
					<div className='form'>
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
