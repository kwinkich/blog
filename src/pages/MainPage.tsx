import { BlogCard } from '../components/BlogCard/BlogCard';
import { Header } from '../components/Header/Header';
import { LastUpdates } from '../components/LastUpdates/LastUpdates';

export default function MainPage() {
	return (
		<main className='container mx-auto max-w-[65%]'>
			<Header />
			<div className='flex justify-between'>
				<div>
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
				<LastUpdates />
			</div>
		</main>
	);
}
