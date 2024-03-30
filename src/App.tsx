import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import PostPage from './pages/PostPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/post/:id' element={<PostPage />} />
				<Route path='/news/:id' element={<NewsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
