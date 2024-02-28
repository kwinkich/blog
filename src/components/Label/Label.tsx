interface LabelProps {
	labelContent: string;
}

export const Label: React.FC<LabelProps> = ({ labelContent }) => {
	return (
		<label className='text-xl text-white font-semibold'>{labelContent}</label>
	);
};
