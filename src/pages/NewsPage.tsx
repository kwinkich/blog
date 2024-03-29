import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { News } from '../types/News';

export default function NewsPage() {
	const [newsData, setNewsData] = useState<News>();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [newsTitle, setNewsTitle] = useState<string>('');
	const [newsDescription, setNewsDescription] = useState<string>('');
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const getNewsById = async () => {
			try {
				const newData = await axios.get(`http://localhost:5050/api/news/${id}`);
				setNewsData(newData.data);
			} catch (err) {
				console.error(err);
			}
		};

		getNewsById();
	}, []);

	const handleEditNews = async () => {
		try {
			setIsEdit(false);
			const updatePost = await axios.put(
				`http://localhost:5050/api/news/update/${id}`,
				{
					title: newsTitle,
					description: newsDescription,
				}
			);
			setNewsData(updatePost.data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleDeleteNews = async () => {
		try {
			const deletedPost = await axios.delete(
				`http://localhost:5050/api/news/delete/${id}`
			);
			console.log(deletedPost);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section className='section'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='back'> &lt; back</p>
				</Link>
				<h1 className='h1 mb-10'>{newsData?.title}</h1>
				{!isEdit ? (
					<>
						<div>
							<p className='description'>{newsData?.description}</p>
						</div>
						<div className='flex gap-x-3 items-center'>
							<Button click={() => setIsEdit(true)}>Edit</Button>
							<Button click={handleDeleteNews}>Delete</Button>
						</div>
					</>
				) : (
					<div className='form-block'>
						<div className='form'>
							<Label labelContent='News name' />
							<Input
								placeholder='News Name'
								onChange={(e) => setNewsTitle(e.target.value)}
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
