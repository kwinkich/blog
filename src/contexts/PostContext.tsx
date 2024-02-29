import React, { ReactNode, createContext, useContext, useState } from 'react';

export type Post = {
	id: number;
	name: string;
	description: string;
	tags: object;
};

const PostsContext = createContext<{
	posts: Post[];
	createPost: (post: Post) => void;
	editPost: (post: Post) => void;
	deletePost: (postId: number) => void;
}>({
	posts: [],
	createPost: () => {},
	editPost: () => {},
	deletePost: () => {},
});

export const PostProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [posts, setPosts] = useState<Post[]>([]);

	const createPost = (post: Post) => {
		setPosts((prevPost) => [...prevPost, post]);
	};

	const editPost = (editedPost: Post) => {
		setPosts((prevPost) =>
			prevPost.map((post) =>
				post.id === editedPost.id ? { ...post, ...editedPost } : post
			)
		);
	};

	const deletePost = (postId: number) => {
		setPosts((prevPost) => prevPost.filter((post) => post.id !== postId));
	};

	return (
		<PostsContext.Provider
			value={{
				posts,
				createPost,
				editPost,
				deletePost,
			}}
		>
			{children}
		</PostsContext.Provider>
	);
};

export const usePost = () => useContext(PostsContext);
