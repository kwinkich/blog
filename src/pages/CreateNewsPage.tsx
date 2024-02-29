import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';

export default function CreateNewsPage() {
	return (
		<section className='container mx-auto max-w-[65%]'>
			<Header />
			<div>
				<h1 className='text-4xl text-white font-bold mb-10'>Create New</h1>
				<div className='flex flex-col gap-y-6 max-w-[40%]'>
					<div className='flex items-center gap-x-3 justify-between'>
						<Label labelContent='New name' />
						<Input placeholder='New Name' />
					</div>
					<div className='flex items-center gap-x-3 justify-between'>
						<Label labelContent='New Content' />
						<Input placeholder='New Content' />
					</div>
					<Button>Create New</Button>
				</div>
			</div>
		</section>
	);
}
