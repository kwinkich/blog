import { ReactNode } from 'react';

interface TagProps {
	children: ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children }) => {
	return <div className=' px-3 py-1 bg-slate-400 rounded-full'>{children}</div>;
};
