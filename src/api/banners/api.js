import { instance } from '@/context/axios';

export const getBanners = async () => {
    const banners = await instance
        .get('/banners')
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        });
    return banners;
};
