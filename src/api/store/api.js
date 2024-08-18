import { axiosInstance } from '@/context/axios';

export const getStore = async () => {
    const store = await axiosInstance
        .get('/store')
        .then((res) => res.data.store[0])
        .catch((err) => console.log(err));
    return store;
};
