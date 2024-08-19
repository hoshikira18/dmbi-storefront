import { instance } from '@/context/axios';

export const getPartners = async () => {
    const partners = await instance
        .get('/partners')
        .then((res) => res.data)
        .catch((err) => console.log(err));

    return partners;
};
