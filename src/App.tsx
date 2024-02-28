import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePostPage from './pages/CreatePostPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/createPost',
		element: <CreatePostPage />,
	},
]);

function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;
