import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateNewsPage from './pages/CreateNewsPage';
import CreatePostPage from './pages/CreatePostPage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage.1';
import PostPage from './pages/PostPage';

function App() {
	const [cookies, setCookie] = useCookies(['user']);

	useEffect(() => {
		if (!cookies.user) {
			setCookie('user', 'user', { path: '/' });
		}
	}, [cookies.user, setCookie]);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/post/create' element={<CreatePostPage />} />
				<Route path='/news/create' element={<CreateNewsPage />} />
				<Route path='/post/:id' element={<PostPage />} />
				<Route path='/news/:id' element={<NewsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
