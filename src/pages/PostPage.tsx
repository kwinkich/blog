import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Tag } from '../components/Tag/Tag';
import { Post } from '../types/Post';

export default function PostPage() {
	const [postData, setPostData] = useState<Post>();
	const { id } = useParams();

	useEffect(() => {
		const getPost = async () => {
			try {
				const response = await axios.get(
					`https://blog-server-oerc.onrender.com/api/posts/${id}`
				);
				setPostData(response.data);
			} catch (err) {
				console.error(err);
			}
		};
		getPost();
	}, [id]);

	return (
		<section className='section'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='back'>&lt; back</p>
				</Link>
				<h1 className='h1 mb-5'>{postData?.title}</h1>
				<div className='flex gap-x-3 mb-10 items-start'>
					<p className='text-lg text-gray-200'>Tags: </p>
					<div className='flex flex-wrap gap-y-2 gap-x-2'>
						{postData?.tags.map((tag) => (
							<Tag key={postData._id}>{tag}</Tag>
						))}
					</div>
				</div>
				<div>
					<p className='description'>{postData?.description}</p>
				</div>
			</div>
		</section>
	);
}
