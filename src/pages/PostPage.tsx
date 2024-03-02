import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { Tag } from '../components/Tag/Tag';
import { usePost } from '../contexts/PostContext';

export default function PostPage() {
	const [postName, setPostName] = useState<string>('');
	const [postDescription, setPostDescription] = useState<string>('');
	const [postTags, setPostTags] = useState<string[]>([]);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { id } = useParams();
	const { posts, editPost, deletePost } = usePost();

	const post = id
		? posts.find((post) => post.id === parseInt(id, 10))
		: undefined;

	const handleEditPost = () => {
		const editedPost = {
			name: postName,
			description: postDescription,
			id: post?.id || 0,
			tags: postTags,
		};
		editPost(editedPost);
		setIsEdit(false);
	};

	return (
		<section className='section'>
			<Header />
			<div>
				<Link to={`/`}>
					<p className='back'>&lt; back</p>
				</Link>
				<h1 className='h1 mb-5'>{post?.name}</h1>
				{!isEdit ? (
					<>
						<div className='flex gap-x-3 mb-10 items-center'>
							<p className='text-lg text-gray-200'>Tags: </p>
							<div className='flex gap-x-2'>
								{post &&
									Object.values(post?.tags).map((tag, index) => (
										<Tag key={index}>{tag}</Tag>
									))}
							</div>
						</div>
						<div>
							<p className='description'>{post?.description}</p>
						</div>
						<div className='flex gap-x-3 items-center'>
							<Button click={() => setIsEdit(true)}>Edit</Button>
							<Link to={`/`}>
								<Button click={() => deletePost(post?.id || 0)}>Delete</Button>
							</Link>
						</div>
					</>
				) : (
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
						<Button click={handleEditPost}>Ok</Button>
					</div>
				)}
			</div>
		</section>
	);
}
