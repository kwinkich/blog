import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { Tag } from '../components/Tag/Tag';
import { Post } from '../types/Post';

export default function PostPage() {
	const [cookies] = useCookies(['user']);
	const [isAdmin, setIsAdmin] = useState<boolean>();
	const [postData, setPostData] = useState<Post>();
	const [postTitle, setPostTitle] = useState<string>('');
	const [postDescription, setPostDescription] = useState<string>('');
	const [postTags, setPostTags] = useState<string[]>([]);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (cookies.user !== 'kwinkich admin') {
			setIsAdmin(false);
		} else {
			setIsAdmin(true);
		}
	}, [cookies.user]);

	useEffect(() => {
		const getPost = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5050/api/posts/${id}`
				);
				setPostData(response.data);
			} catch (err) {
				console.error(err);
			}
		};
		getPost();
	}, [id]);

	const editPost = async () => {
		try {
			const response = await axios.put(
				`http://localhost:5050/api/posts/update/${id}`,
				{
					title: postTitle,
					description: postDescription,
					tags: postTags,
				}
			);
			setIsEdit(false);
			setPostData(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	const deletePost = async () => {
		try {
			const deletedPost = await axios.delete(
				`http://localhost:5050/api/posts/delete/${id}`
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
					<p className='back'>&lt; back</p>
				</Link>
				<h1 className='h1 mb-5'>{postData?.title}</h1>
				{!isEdit ? (
					<>
						<div className='flex gap-x-3 mb-10 items-center'>
							<p className='text-lg text-gray-200'>Tags: </p>
							<div className='flex gap-x-2'>
								{postData?.tags.map((tag) => (
									<Tag key={postData._id}>{tag}</Tag>
								))}
							</div>
						</div>
						{isAdmin ? (
							<>
								<div>
									<p className='description'>{postData?.description}</p>
								</div>
								<div className='flex gap-x-3 items-center'>
									<Button click={() => setIsEdit(true)}>Edit</Button>
									<Button click={deletePost}>Delete</Button>
								</div>
							</>
						) : (
							<div>
								<p className='description'>{postData?.description}</p>
							</div>
						)}
					</>
				) : (
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
							<Label labelContent='Post Content' />
							<Input
								placeholder='Post Tag'
								onChange={(e) => setPostTags(e.target.value.split(','))}
							/>
						</div>
						<Button click={editPost}>Ok</Button>
					</div>
				)}
			</div>
		</section>
	);
}
