import { axiosInstance } from '@/context/axios';

export const getNews = async () => {
    const news = await axiosInstance
        .get('/posts')
        .then((res) => res.data)
        .catch((err) => {
            console.log('Error when get all posts');
        });

    return news;
};
