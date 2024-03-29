import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';

export default function CreateNewsPage() {
	const [cookies] = useCookies(['user']);
	const [newsName, setNewsName] = useState<string>('');
	const [newsDescription, setNewsDescription] = useState<string>('');
	const navigate = useNavigate();

	useEffect(() => {
		if (cookies.user !== 'kwinkich admin') {
			return navigate('/');
		}
	}, [cookies.user, navigate]);

	const handleCreateNews = async () => {
		try {
			const createdNews = await axios.post(
				'https://blog-server-ruvh.onrender.com/api/news/create',
				{
					title: newsName,
					description: newsDescription,
				}
			);
			console.log(createdNews);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

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
