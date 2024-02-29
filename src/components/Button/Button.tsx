import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	click?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, click }) => {
	return (
		<button
			onClick={click}
			className='text-lg text-white border-2 border-dashed w-max px-10 py-3 hover:border-solid duration-300 ease-in-out'
		>
			{children}
		</button>
	);
};
