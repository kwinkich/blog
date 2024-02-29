import React, { ReactNode, createContext, useContext, useState } from 'react';

export type News = {
	id: number;
	name: string;
	description: string;
};

const NewssContext = createContext<{
	newss: News[];
	createNews: (news: News) => void;
	editNews: (news: News) => void;
	deleteNews: (newsId: number) => void;
}>({
	newss: [],
	createNews: () => {},
	editNews: () => {},
	deleteNews: () => {},
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

	const deleteNews = (newsId: number) => {
		setNewss((prevNews) => prevNews.filter((news) => news.id !== newsId));
	};

	return (
		<NewssContext.Provider
			value={{
				newss,
				createNews,
				editNews,
				deleteNews,
			}}
		>
			{children}
		</NewssContext.Provider>
	);
};

export const useNews = () => useContext(NewssContext);
