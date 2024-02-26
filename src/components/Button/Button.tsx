import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<button className='text-lg text-white border-2 border-dashed w-max px-10 py-3 hover:border-solid duration-300 ease-in-out'>
			{children}
		</button>
	);
};
