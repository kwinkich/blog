import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { useNews } from '../contexts/NewsContext';

export default function NewsPage() {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [newsName, setNewsName] = useState<string>('');
	const [newsDescription, setNewsDescription] = useState<string>('');
	const { id } = useParams();
	const { newss, editNews, deleteNews } = useNews();

	const news = id
		? newss.find((news) => news.id === parseInt(id, 10))
		: undefined;

	function handleEditNews() {
		const editedNews = {
			name: newsName,
			description: newsDescription,
			id: news?.id || 0,
		};
		editNews(editedNews);
		setIsEdit(false);
	}

	return (
		<section className='section'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='back'> &lt; back</p>
				</Link>
				<h1 className='h1 mb-10'>{news?.name}</h1>
				{!isEdit ? (
					<>
						<div>
							<p className='description'>{news?.description}</p>
						</div>
						<div className='flex gap-x-3 items-center'>
							<Button click={() => setIsEdit(true)}>Edit</Button>
							<Link to={`/`}>
								<Button click={() => deleteNews(news?.id || 0)}>Delete</Button>
							</Link>
						</div>
					</>
				) : (
					<div className='form-block'>
						<div className='form'>
							<Label labelContent='News name' />
							<Input
								placeholder='News Name'
								onChange={(e) => setNewsName(e.target.value)}
							/>
						</div>
						<div className='form'>
							<Label labelContent='News Content' />
							<Input
								placeholder='News Content'
								onChange={(e) => setNewsDescription(e.target.value)}
							/>
						</div>
						<Button click={handleEditNews}>Ok</Button>
					</div>
				)}
			</div>
		</section>
	);
}
