import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { useNews } from '../contexts/NewsContext';
export default function NewsPage() {
	const { id } = useParams();
	const { newss } = useNews();

	const news = id
		? newss.find((news) => news.id === parseInt(id, 10))
		: undefined;

	return (
		<section className='container mx-auto max-w-[65%]'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='text-lg text-gray-200 mb-5'> back</p>
				</Link>
				<h1 className='text-4xl text-white font-bold mb-10'>{news?.name}</h1>
				<div>
					<p className='text-xl text-white'>{news?.description}</p>
				</div>
			</div>
		</section>
	);
}
