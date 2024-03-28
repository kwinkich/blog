import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CreateNewsPage from './pages/CreateNewsPage';
import CreatePostPage from './pages/CreatePostPage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import PostPage from './pages/PostPage';

function App() {
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
