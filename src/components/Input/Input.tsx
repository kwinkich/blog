import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
	return (
		<input className='px-4 py-3' type='text' onChange={onChange} {...props} />
	);
};
