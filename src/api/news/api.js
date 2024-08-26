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

export const getOneNews = async (id) => {
    const news = await instance
        .get('/posts/' + id)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    return news;
};

export const getNewsCategories = async () => {
    const categories = await instance
        .get('/blog-categories')
        .then((res) => res.data.blogCategories)
        .catch((err) => console.log(err));
    return categories;
};
