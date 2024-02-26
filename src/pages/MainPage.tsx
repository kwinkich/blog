import { BlogCard } from '../components/BlogCard/BlogCard';
import { Header } from '../components/Header/Header';

export default function MainPage() {
	return (
		<main className='container mx-auto max-w-[60%]'>
			<Header />
			<div className=''>
				<h1 className='text-4xl text-white font-bold mb-10'>Articles</h1>
				<div className='max-w-max grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-x-16 gap-y-16'>
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</main>
	);
}
