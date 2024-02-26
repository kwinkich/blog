import { Header } from '../components/Header/Header';

export default function MainPage() {
	return (
		<main className='container mx-auto max-w-[50%]'>
			<Header />
			<div className=''>
				<h1 className='text-4xl text-white font-bold'>Articles</h1>
			</div>
		</main>
	);
}
