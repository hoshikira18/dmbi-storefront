import { instance } from '@/context/axios';

export const getNews = async (limit = 100, offset = 0) => {
    const news = await instance
        .get('/posts', {
            params: {
                limit: limit,
                offset: offset,
            },
        })
        .then((res) => res.data.posts)
        .catch((err) => {
            console.log('Error when get all posts');
        });

    return news;
};
