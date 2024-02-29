import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NewsProvider } from './contexts/NewsContext';
import { PostProvider } from './contexts/PostContext';
import CreateNewsPage from './pages/CreateNewsPage';
import CreatePostPage from './pages/CreatePostPage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import PostPage from './pages/PostPage';

function App() {
	return (
		<Router>
			<PostProvider>
				<NewsProvider>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/createPost' element={<CreatePostPage />} />
						<Route path='/createNews' element={<CreateNewsPage />} />
						<Route path='/post/:id' element={<PostPage />} />
						<Route path='/news/:id' element={<NewsPage />} />
					</Routes>
				</NewsProvider>
			</PostProvider>
		</Router>
	);
}

export default App;
