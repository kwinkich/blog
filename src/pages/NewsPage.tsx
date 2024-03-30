import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { News } from '../types/News';

export default function NewsPage() {
	const [newsData, setNewsData] = useState<News>();
	const { id } = useParams();

	useEffect(() => {
		const getNewsById = async () => {
			try {
				const newData = await axios.get(
					`https://blog-server-ruvh.onrender.com/api/news/${id}`
				);
				setNewsData(newData.data);
			} catch (err) {
				console.error(err);
			}
		};

		getNewsById();
	}, [id]);

	return (
		<section className='section'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='back'> &lt; back</p>
				</Link>
				<h1 className='h1 mb-10'>{newsData?.title}</h1>
				<div>
					<p className='description'>{newsData?.description}</p>
				</div>
			</div>
		</section>
	);
}
