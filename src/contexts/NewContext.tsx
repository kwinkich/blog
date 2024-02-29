import React, { ReactNode, createContext, useContext, useState } from 'react';

export type News = {
	id: number;
	name: string;
	description: string;
	tags: object;
};

const NewssContext = createContext<{
	newss: News[];
	createNews: (news: News) => void;
	editNews: (news: News) => void;
}>({
	newss: [],
	createNews: () => {},
	editNews: () => {},
});

export const NewsProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [newss, setNewss] = useState<News[]>([]);

	const createNews = (news: News) => {
		setNewss((prevNews) => [...prevNews, news]);
	};

	const editNews = (editedNews: News) => {
		setNewss((prevNews) =>
			prevNews.map((news) =>
				news.id === editedNews.id ? { ...news, ...editedNews } : news
			)
		);
	};

	return (
		<NewssContext.Provider
			value={{
				newss,
				createNews,
				editNews,
			}}
		>
			{children}
		</NewssContext.Provider>
	);
};

export const useNews = () => useContext(NewssContext);
