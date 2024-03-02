import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { usePost } from '../contexts/PostContext';

export default function CreatePostPage() {
	const [postName, setPostName] = useState<string>('');
	const [postDescription, setPostDescription] = useState<string>('');
	const [postTags, setPostTags] = useState<string[]>([]);
	const { posts, createPost } = usePost();

	const handleCreatePost = () => {
		const newPost = {
			name: postName,
			description: postDescription,
			id: posts.length + 1,
			tags: postTags,
		};
		createPost(newPost);
		console.log(posts);
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
							onChange={(e) => setPostName(e.target.value)}
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
						<Label labelContent='Post Content' />
						<Input
							placeholder='Post Tag'
							onChange={(e) => setPostTags(e.target.value.split(','))}
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
