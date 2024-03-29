// import { useState } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';

export default function CreatePostPage() {
	const [cookies] = useCookies(['user']);
	const [postTitle, setPostTitle] = useState<string>('');
	const [postDescription, setPostDescription] = useState<string>('');
	const [postTags, setPostTags] = useState<string>('');
	const navigate = useNavigate();

	useEffect(() => {
		if (cookies.user !== 'kwinkich admin') {
			return navigate('/');
		}
	}, [cookies.user, navigate]);

	const handleCreatePost = async () => {
		try {
			const createdPost = await axios.post(
				'https://blog-server-ruvh.onrender.com/api/posts/create',
				{
					title: postTitle,
					description: postDescription,
					tags: postTags,
				}
			);
			console.log(createdPost);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section className='section'>
			<Header />
			<div>
				<h1 className='h1 mb-10'>Create Post</h1>
				<div className='form-block'>
					<div className='form'>
						<Label labelContent='Post name' />
						<Input
							placeholder='Post Name'
							onChange={(e) => setPostTitle(e.target.value)}
						/>
					</div>
					<div className='form'>
						<Label labelContent='Post Content' />
						<Input
							placeholder='Post Content'
							onChange={(e) => setPostDescription(e.target.value)}
						/>
					</div>
					<div className='form'>
						<Label labelContent='Post Tags' />
						<Input
							placeholder='Post Tag'
							onChange={(e) => setPostTags(e.target.value)}
						/>
					</div>
					<Button click={handleCreatePost}>Create Post</Button>
					<Link to={`/`}>
						<Button>Left</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
