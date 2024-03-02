import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	click?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, click }) => {
	return (
		<button
			onClick={click}
			className='text-lg text-inherit border-2 border-white bg-white w-max px-10 py-3 hover:bg-inherit hover:text-white duration-300 ease-in-out'
		>
			{children}
		</button>
	);
};
