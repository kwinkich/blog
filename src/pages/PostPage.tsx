import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { usePost } from '../contexts/PostContext';

export default function PostPage() {
	const { id } = useParams();
	const { posts } = usePost();

	const post = id
		? posts.find((post) => post.id === parseInt(id, 10))
		: undefined;

	return (
		<section className='container mx-auto max-w-[65%]'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='text-lg text-gray-200 mb-5'> back</p>
				</Link>
				<h1 className='text-4xl text-white font-bold mb-10'>{post?.name}</h1>
				<div>
					<p className='text-xl text-white'>{post?.description}</p>
				</div>
			</div>
		</section>
	);
}
