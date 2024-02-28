import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';

export default function CreatePostPage() {
	return (
		<section>
			<Label labelContent='Post name' />
			<Input placeholder='Post Name' />
		</section>
	);
}
